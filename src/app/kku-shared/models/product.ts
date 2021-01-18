export class Product {
  constructor(
    public name: string,
    public id?: string,
    public description?: string,
    public imageUrl?: URL,
    public stock?: number,
    public price?: number
  ) {}
}
