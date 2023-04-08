import { Injectable } from '@angular/core';
import { CartModel } from 'src/app/cart/models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: CartModel[] = [];

  constructor() { }

  getItems(): CartModel[] {
    return this.items;
  }

  addItem(item: CartModel): void {
    if (!this.items.find((el) => el.name === item.name)) {
      this.items.push(item);
    }
  }
}
