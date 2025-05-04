import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../Models/recipe.model';
import { Router } from '@angular/router'; // Add Router for navigation

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent {
  recipe: Recipe = {
    id: undefined, // Do not set id; let backend handle it
    name: '',
    cuisine: '',
    diet: [],
    prepTime: '',
    likes: 0,
    rating: 0,
    image: '',
    instructions: ''
  };

  constructor(
    private recipeService: RecipeService,
    private router: Router // Inject Router
  ) {}

  onSubmit(): void {
    if (!this.recipe.name || !this.recipe.cuisine || !this.recipe.diet.length || !this.recipe.prepTime || !this.recipe.instructions || !this.recipe.image) {
      alert('Veuillez remplir tous les champs requis.');
      return;
    }

    // Create a new object without the id field
    const recipeToSend = { ...this.recipe, id: undefined };

    this.recipeService.createRecette(recipeToSend).subscribe({
      next: (createdRecipe: Recipe) => {
        alert('Recette ajoutée avec succès !');
        this.resetForm();
        // Navigate to the details page with the new recipe's id
        this.router.navigate(['/details', createdRecipe.id]);
      },
      error: (error: any) => {
        console.error('Erreur lors de l\'ajout de la recette:', error);
        alert('Une erreur s\'est produite. Veuillez réessayer.');
      }
    });
  }

  private resetForm(): void {
    this.recipe = {
      id: undefined, // Ensure id is undefined for new submissions
      name: '',
      cuisine: '',
      diet: [],
      prepTime: '',
      likes: 0,
      rating: 0,
      image: '',
      instructions: ''
    };
  }
}
