import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.interface';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Array<Ingredient> = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients);
  }

  onEditItem(index : number) {
    this.shoppingListService.startedEditing.next(index);
  }

}
