import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Output() selectedRecipeItem = new EventEmitter<void>();
  @Input() recipe: Recipe;

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected() {
    this.selectedRecipeItem.emit();
  }

}
