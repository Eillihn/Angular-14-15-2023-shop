import { Injectable } from '@angular/core';
import { ProductCategory, ProductModel } from 'src/app/products/models';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() { }

  getProducts(): ProductModel[] {
    return [
      {
        id: '0',
        name: "The Hitchhiker's Guide to the Galaxy",
        description: 'A comic science fiction series by Douglas Adams.',
        price: 12.99,
        category: ProductCategory.Book,
        isAvailable: true,
      },
      {
        id: '1',
        name: 'The Legend of Zelda: Breath of the Wild',
        description:
          'An action-adventure game developed and published by Nintendo.',
        price: 59.99,
        category: ProductCategory.VideoGame,
        isAvailable: true,
      },
      {
        id: '3',
        name: 'Catan',
        description: 'A strategy board game designed by Klaus Teuber.',
        price: 39.99,
        category: ProductCategory.BoardGame,
        isAvailable: true,
      },
      {
        id: '4',
        name: "Harry Potter and the Philosopher's Stone",
        description:
          'The first novel in the Harry Potter series by J.K. Rowling.',
        price: 7.99,
        category: ProductCategory.Book,
        isAvailable: true,
      },
      {
        id: '5',
        name: 'Ticket to Ride',
        description:
          'A railway-themed strategy board game designed by Alan R. Moon.',
        price: 49.99,
        category: ProductCategory.BoardGame,
        isAvailable: false,
      },
    ];
  }
}
