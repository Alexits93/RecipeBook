import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipeBookComponent} from './recipe-book/recipe-book.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipe-book', pathMatch: 'full'},
  {path: 'recipe-book', component: RecipeBookComponent},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
