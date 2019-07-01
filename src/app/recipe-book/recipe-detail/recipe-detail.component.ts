import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {Recipe} from '../recipe.model';
import {ActivatedRoute} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  slug: string;

  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: {slug: string}) => {
      this.slug = params.slug;
      this.selectedRecipe = this.recipeService.getSelectedRecipe(this.slug);
    });
  }

  toShoppingList() {
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
  }
}
