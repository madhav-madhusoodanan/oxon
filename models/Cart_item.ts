class CartItem {
  id: string;
  title: string;
  quantity: number;
  price: number;

  constructor(id, title, quantity, price) {
    this.id = id;
    this.title = title;
    this.quantity = quantity;
    this.price = price;
  }

  add(){
      this.quantity += 1;
  }
  remove(){
      this.quantity -= 1;
  }
  
}
