import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Recipe} from './Models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl ='http://localhost:3000/recipes'


  constructor(private httpclient : HttpClient) { }
  getRecipes():Observable<Recipe[]>{
    return this.httpclient.get<Recipe[]>(this.apiUrl);
  }
  getbyid(id:number): Observable<Recipe>{
    return this.httpclient.get<Recipe>(`${this.apiUrl}/${id}`);
  }

  createRecette(recipe: {
    id: undefined;
    name: string;
    cuisine: string;
    diet: string[];
    prepTime: string;
    likes: number;
    rating: number;
    image: string;
    instructions: string
  }): Observable<Recipe> {
    return this.httpclient.post<Recipe>(this.apiUrl, recipe);
  }


}
