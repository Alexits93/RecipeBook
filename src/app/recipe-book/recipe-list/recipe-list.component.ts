import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Hungarian Gulasch', 'From Hungary', 'http://www.mnhsz.com/storage/upload/2017/marhaporkolt_bogracsban.jpg'),
    new Recipe('Angus Steak', 'From the USA', 'https://images-na.ssl-images-amazon.com/images/I/51NYBtXasUL.jpg'),
    new Recipe('Jalapeno Cheese Soup', 'From Mexico', 'http://34.198.236.63/wp-content/uploads/2014/12/Jalapeno-Cheddar-Soup.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
