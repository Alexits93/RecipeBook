import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss'],
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  @Output() closeSelectedRecipe = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  clearSelectedRecipe() {
    this.selectedRecipe = null;
  }
}
