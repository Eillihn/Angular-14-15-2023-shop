# Changelog

## [0.0.0] - 2023-04-07

### Added

- Initial app

## [0.0.0] - 2023-04-08

### Added

- FirstComponent with props:
  - name: string 
  - description: string
  - price: number
  - category: enum
  - isAvailable: boolean
- ProductComponent
  - buy button in template
  - onAddToCart() on click that logged msg about buying product
- ProductListComponent
  - shows list ProductComponent
  - uses ProductsService to get products
- ProductsService
  - getProducts(): returns list of products
- ProductModel, CartModel, ProductCategory
- CartListComponent
  - shows list of CartModel, if empty - msg
- CartService
  - getItems(): returns cart items
  - addItem(): adds cart item

