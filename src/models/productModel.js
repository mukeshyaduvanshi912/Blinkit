class Product {
  constructor({ id, name, title, price, description, image, category } = {}) {
    this.id = id ?? null;
    this.name = name ?? title ?? "";
    this.price = price != null ? Number(price) : 0;
    this.description = description ?? "";
    this.image = image ?? "";
    this.category = category ?? "";
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      description: this.description,
      image: this.image,
      category: this.category,
    };
  }
}

export default Product;
