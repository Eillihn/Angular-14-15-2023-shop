import { Component, Input } from '@angular/core';
import { ProductModel } from 'src/app/products/models';
import { CartService } from 'src/app/cart/services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product!: ProductModel;

  constructor(private cartService: CartService) { }

  onAddToCart() {
    console.log('Thank you for your purchase!');
    this.cartService.addItem(this.product);
  }
}
