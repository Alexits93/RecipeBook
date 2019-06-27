import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
  }

  onAddIngredient() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAMount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAMount);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
