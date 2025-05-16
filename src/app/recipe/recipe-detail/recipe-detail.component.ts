import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe | null = null;
  maxIngredientName: string = '';

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.recipeService.getRecipeDetail(id).subscribe((data) => {
        this.recipe = data;
        this.setMaxIngredient();
      });
    }
  }

  setMaxIngredient() {
    if (!this.recipe || !this.recipe.ingredientes || this.recipe.ingredientes.length === 0) {
      this.maxIngredientName = '';
      return;
    }
    let max = this.recipe.ingredientes[0];
    for (let ing of this.recipe.ingredientes) {
      if (Number(ing.cantidad) > Number(max.cantidad)) {
        max = ing;
      }
    }
    this.maxIngredientName = max.nombre;
  }

  goBack() {
    this.router.navigate(['/recipe']);
  }
}
