export class Product {
  constructor(
    public id: string,
    public name: string,
    public description?: string,
    public imageUri?: URL,
    public stock?: number,
    public price?: number
  ) {}
}
