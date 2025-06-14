import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { IngredientModule } from '../ingredient/ingredient.module';
import { HttpClientModule } from '@angular/common/http';
import { RecipeService } from './recipe.service';

@NgModule({
  declarations: [RecipeListComponent, RecipeDetailComponent],
  imports: [CommonModule, IngredientModule, HttpClientModule],
  exports: [RecipeListComponent, RecipeDetailComponent],
  providers: [RecipeService],
})
export class RecipeModule {}
