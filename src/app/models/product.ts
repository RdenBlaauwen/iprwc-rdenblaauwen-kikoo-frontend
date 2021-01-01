import { Url } from 'url';

export class Product {
  constructor(
    public id: string,
    public name: string,
    public description?: string,
    public imageUri?: Url,
    public stock?: number,
    public price?: number
  ) {}
}
