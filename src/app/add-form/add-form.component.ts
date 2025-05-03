import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../Models/recipe.model';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent {
  recipe: Recipe = {
    id: 0, // Will be set by the backend
    name: '',
    cuisine: '',
    diet: [],
    prepTime: '',
    likes: 0,
    rating: 0,
    image: '',
    instructions: ''
  };

  constructor(private recipeService: RecipeService) {}

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.recipe.image = reader.result as string; // Base64 string
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    if (!this.recipe.name || !this.recipe.cuisine || !this.recipe.diet.length || !this.recipe.prepTime || !this.recipe.instructions || !this.recipe.image) {
      alert('Veuillez remplir tous les champs requis.');
      return;
    }

    this.recipeService.createRecette(this.recipe).subscribe({
      next: (createdRecipe: Recipe) => {
        alert('Recette ajoutée avec succès !');
        this.resetForm();
      },
      error: (error: any) => {
        console.error('Erreur lors de l\'ajout de la recette:', error);
        alert('Une erreur s\'est produite. Veuillez réessayer.');
      }
    });
  }

  private resetForm(): void {
    this.recipe = {
      id: 0,
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
