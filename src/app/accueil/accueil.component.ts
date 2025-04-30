import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../recipe.service';
import {JsonPipe, NgForOf} from '@angular/common';
import {Recipe} from '../Models/recipe.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-accueil',
  imports: [
    NgForOf,
    RouterLink,
    //   convert JS TO JSON  FOR DEBUG
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit{
  allrecipes?: Recipe[];
  constructor(private recipe : RecipeService) {}


  ngOnInit():void {
    this.afficherrecipes();
  }



    afficherrecipes(){
      this.recipe.getRecipes().subscribe(
        doto => {
          this.allrecipes = doto;
          console.log(doto)
        }

      )
    }

}
