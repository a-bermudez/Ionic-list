import { Component } from '@angular/core';
import { ShoppingItemsService } from '../services/shopping-items.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(public shoppingList: ShoppingItemsService) {}
}
