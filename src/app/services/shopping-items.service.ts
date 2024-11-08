import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingItemsService {
  public items: string[];
  public isEmpty: boolean;
  constructor() {
    this.items = [];
    this.isEmpty = true;
  }
  addItem(item: string): void {
    this.items.push(item);
    this.isEmpty = false;
  }
  removeItems(item: string): void {
    let index = this.items.findIndex((it) => {
      it === item;
    });
    if (index != -1) {
      this.items.splice(index, 1);
      if (this.items.length === 0) {
        this.isEmpty = false;
      }
    }
  }
  removeAllItems(): void {
    this.items = [];
    this.isEmpty = true;
  }
  existItem(item: string): string {
    const itemFound: string = this.items.find((it: string) => {
      return it.toLowerCase().trim() === item.toLowerCase().trim();
    });
    return itemFound;
  }
}
