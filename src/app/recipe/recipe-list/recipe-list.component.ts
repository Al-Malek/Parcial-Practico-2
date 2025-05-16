import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../Recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit() {
    this.recipeService.getRecipes().subscribe((data) => {
      this.recipes = data;
    });
  }

  goToDetail(recipe: Recipe) {
    this.router.navigate(['/recipe', recipe.id]);
  }
}
