class Producto {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Libro extends Producto {
  constructor(name, price, autor) {
    super(name, price);
    this.autor = autor;
  }
}

class Basket {
  constructor() {
    this.products = [];
  }
  addProduct(amount, product) {
    this.products.push(...Array(amount).fill(product));
  }
  calcTotal() {
    return this.products
      .map(product => product.price)
      .reduce((a, b) => a + b, 0);
  }
  printShoppingInfo() {
    console.log("one has to pay in total: " + this.calcTotal());
  }
}

const bread = new Producto("Pan", 1);
const agua = new Producto("agua", 1);
const libro = new Libro("Cornelia", 4, "Florencia Etcheves");
const basket = new Basket();
basket.addProduct(3, bread);
basket.addProduct(1, agua);
basket.addProduct(2, libro);
basket.printShoppingInfo();
