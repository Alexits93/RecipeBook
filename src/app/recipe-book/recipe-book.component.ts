import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss']
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
