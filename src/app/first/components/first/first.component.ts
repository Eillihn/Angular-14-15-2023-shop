import { Component } from '@angular/core';
import { ProductCategory } from 'src/app/products/models';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent {
  public name: string = 'Harry Potter';
  description: string = 'Magic';
  price: number = 50;
  category: ProductCategory[] = [
    ProductCategory.Book,
    ProductCategory.VideoGame,
  ];
  isAvailable: boolean = true;
}
