"use strict";
class Product {
    static _productCount = 0;
    id;
    _name;
    _price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
        Product._productCount++;
        this.id = Product._productCount;
    }
    set name(value) {
        if (value.length < 1) {
            throw new Error("Name must contain at least 1 character");
        }
        this._name = value;
    }
    set price(value) {
        if (value < 1) {
            throw new Error("Price must be positive");
        }
        this._price = value;
    }
    static getCount() {
        return Product._productCount;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this._name}, Price: $${this._price}`;
    }
}
class Inventory {
    products = [];
    addProduct(product) {
        this.products.push(product);
    }
    listProducts() {
        let temp = [];
        this.products.forEach((p) => {
            temp.push(p.getDetails());
        });
        temp.push(`Total products created: ${Product.getCount()}`);
        return temp.join("\n");
    }
}
const inventory = new Inventory();
// Product.productCount = 10;
// const product = new Product("", 800);
// const product2 = new Product("Phone", 0);
// product.id = 5;
//# sourceMappingURL=13.Inventory-System.js.map