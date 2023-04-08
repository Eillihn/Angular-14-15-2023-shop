import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/products/models';
import { ProductsService } from 'src/app/products/services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products!: ProductModel[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}
