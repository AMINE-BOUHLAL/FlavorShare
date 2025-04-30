import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Recipe} from './Models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl ='http://localhost:3001/recipes'

  constructor(private httpclient : HttpClient) { }
  getRecipes():Observable<Recipe[]>{
    return this.httpclient.get<Recipe[]>(this.apiUrl)
  }

  }
