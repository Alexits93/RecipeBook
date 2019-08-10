import {Component} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent {
  ingredientsForm: FormGroup;

  constructor(private shoppingListService: ShoppingListService, private fb: FormBuilder) {
    this.setupFormGroup();
  }

  setupFormGroup(): void {
    this.ingredientsForm = this.fb.group({
      ingName: ['', Validators.required],
      ingAmount: ['', Validators.required]
    });
  }


  onAddIngredient() {
    const ingName = this.ingredientsForm.get('ingName').value;
    const ingAMount = this.ingredientsForm.get('ingAmount').value;
    const newIngredient = new Ingredient(ingName, ingAMount);
    this.shoppingListService.addIngredient(newIngredient);
  }

  resetForm(): void {
    this.ingredientsForm.reset();
  }

}
