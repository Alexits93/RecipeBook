import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  @Output() clearSelectedRecipe = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  closeSelectedRecipe() {
    this.clearSelectedRecipe.emit();
  }

}
