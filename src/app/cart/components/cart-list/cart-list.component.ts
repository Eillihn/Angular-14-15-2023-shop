import { Component, OnInit } from '@angular/core';
import { CartModel } from 'src/app/cart/models';
import { CartService } from 'src/app/cart/services';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  items!: CartModel[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  trackByItems(index: number, item: CartModel): string {
    return item.name;
  }
}
