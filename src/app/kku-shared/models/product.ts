import { BackendEntity } from './types';

export abstract class Product {
  constructor(
    public name: string,
    public description: string,
    public imageUrl: URL,
    public stock: number,
    public price: number
  ) {}
}

export class FrontendProduct extends Product {
  constructor(
    name = '',
    description = '',
    imageUrl: URL = new URL(
      'https://cdn.pixabay.com/photo/2014/04/02/14/12/book-306468_1280.png'
    ),
    stock = 0,
    price = 0
  ) {
    super(name, description, imageUrl, stock, price);
  }
}

export class BackendProduct extends Product implements BackendEntity {
  constructor(
    public id: string,
    name: string,
    description: string,
    imageUrl: URL,
    stock: number,
    price: number
  ) {
    super(name, description, imageUrl, stock, price);
  }
}
