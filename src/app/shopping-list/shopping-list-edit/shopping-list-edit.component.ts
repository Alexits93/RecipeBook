import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() addIngredient = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit() {
  }

  onAddIngredient() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAMount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAMount);
    this.addIngredient.emit(newIngredient);
  }

}
