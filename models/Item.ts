export default class Item {
    id: string;
    owner_id: string;
    title: string;
    image_url: string;
    description: string;
    price: number;

  constructor(
    id: string,
    owner_id: string,
    title: string,
    image_url: string,
    description: string,
    price: number,
  ) {
      this.id = id;
      this.owner_id = owner_id;
      this.title = title;
      this.image_url = image_url;
      this.description = description;
      this.price = price;
  }
}
