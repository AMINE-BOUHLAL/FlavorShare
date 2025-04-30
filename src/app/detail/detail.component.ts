import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../Models/recipe.model';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-detail',
  imports: [
    NgForOf
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{

  constructor(private recipe : RecipeService) {}
allrecipes: Recipe[]=[];
  recipesfilter: Recipe[]=[];

  ngOnInit(): void {
  }
  Details(){
    this.recipe.getRecipes().subscribe(rec=>this.allrecipes=rec)

  }




}
