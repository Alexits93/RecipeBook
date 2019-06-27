import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Hungarian Gulasch', 'From Hungary', 'http://www.mnhsz.com/storage/upload/2017/marhaporkolt_bogracsban.jpg'),
    new Recipe('Angus Steak', 'From the USA', 'https://images-na.ssl-images-amazon.com/images/I/51NYBtXasUL.jpg'),
    new Recipe('Jalapeno Cheese Soup', 'From Mexico', 'http://34.198.236.63/wp-content/uploads/2014/12/Jalapeno-Cheddar-Soup.jpg')
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }


}
