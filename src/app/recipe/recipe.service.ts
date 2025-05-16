import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './Recipe';

@Injectable()
export class RecipeService {
  private recipesUrl = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas/recipe.json';
  private recipeDetailUrl = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas/';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesUrl);
  }

  getRecipeDetail(id: number): Observable<Recipe> {
    const url = `${this.recipeDetailUrl}${id}/recipe.json`;
    return this.http.get<Recipe>(url);
  }
}