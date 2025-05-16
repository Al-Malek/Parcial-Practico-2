import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  selected: Boolean = false;
  selectedRecipe: Recipe | null = null;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.getRecipes().subscribe((data) => {
      this.recipes = data;
    });
  }

  onSelect(recipe: Recipe) {
    this.selectedRecipe = recipe;
    this.selected = true;
  }
}
