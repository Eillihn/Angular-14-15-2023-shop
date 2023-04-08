import { ProductCategory } from './product-category.enum';

export interface ProductModel {
    id: string;
    name: string;
    description: string;
    price: number;
    category: ProductCategory;
    isAvailable: boolean;
}
