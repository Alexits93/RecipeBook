import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(1, 'Hungarian Gulasch', 'hungarian-gulasch', 'From Hungary',
      'http://www.mnhsz.com/storage/upload/2017/marhaporkolt_bogracsban.jpg', [
        new Ingredient('Meat', 1),
        new Ingredient('Paprika', 5)
      ]),
    new Recipe(2, 'Angus Steak', 'angus-steak', 'From the USA',
      'https://images-na.ssl-images-amazon.com/images/I/51NYBtXasUL.jpg', [
        new Ingredient('Beef', 3),
        new Ingredient('Steak potato', 10)
      ]),
    new Recipe(3, 'Jalapeno Cheese Soup', 'jalapeno-cheese-soup', 'From Mexico',
      'http://34.198.236.63/wp-content/uploads/2014/12/Jalapeno-Cheddar-Soup.jpg', [
        new Ingredient('Cheese', 2),
        new Ingredient('Jalapeno', 7)
      ])
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getSelectedRecipe(slug: string) {
    return this.recipes.find( (recipe: Recipe) => recipe.slug === slug);
  }


}
