import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../Models/recipe.model';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent implements OnInit {
  allrecipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];
  selectedCategory: string = 'Toutes';
  loading: boolean = true;
  error: string | null = null;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.afficherRecipes();
  }

  afficherRecipes(): void {
    this.recipeService.getRecipes().subscribe({
      next: (recipes: Recipe[]) => {
        this.allrecipes = recipes;
        this.filteredRecipes = recipes; // Initially show all recipes
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Error fetching recipes:', err);
        this.error = 'Échec du chargement des recettes.';
        this.loading = false;
      },
    });
  }

  filterCategory(category: string): void {
    this.selectedCategory = category;
    if (category === 'Toutes') {
      this.filteredRecipes = [...this.allrecipes];
    } else {
      this.filteredRecipes = this.allrecipes.filter((recipe) => {
        // Dietary categories (Végétarien, Vegan, Sans gluten)
        if (['Végétarien', 'Vegan', 'Sans gluten'].includes(category)) {
          const dietMap: { [key: string]: string } = {
            Végétarien: 'Vegetarian',
            Vegan: 'Vegan',
            'Sans gluten': 'Gluten Free',
          };
          return recipe.diet.includes(dietMap[category]);
        }
        // Other categories (Dessert, Plat principal, Entrée, Rapide)
        if (recipe.category) {
          return recipe.category === category;
        }
        // Fallback heuristic matching
        switch (category) {
          case 'Dessert':
            return (
              recipe.name.toLowerCase().includes('cake') ||
              recipe.name.toLowerCase().includes('dessert') ||
              recipe.cuisine.toLowerCase().includes('dessert')
            );
          case 'Plat principal':
            return (
              recipe.cuisine.toLowerCase().includes('main') ||
              recipe.name.toLowerCase().includes('main')
            );
          case 'Entrée':
            return (
              recipe.cuisine.toLowerCase().includes('starter') ||
              recipe.name.toLowerCase().includes('starter')
            );
          case 'Rapide':
            const minutes = parseInt(recipe.prepTime.replace(/\D/g, '')) || Infinity;
            return minutes <= 30;
          default:
            return false;
        }
      });
    }
  }
}
