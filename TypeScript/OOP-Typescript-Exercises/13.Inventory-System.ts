class Product {
	protected static _productCount = 0;
	readonly id: number;
	_name!: string;
	_price!: number;

	constructor(name: string, price: number) {
		this.name = name;
		this.price = price;
		Product._productCount++;
		this.id = Product._productCount;
	}

	set name(value: string) {
		if (value.length < 1) {
			throw new Error("Name must contain at least 1 character");
		}

		this._name = value;
	}

	set price(value: number) {
		if (value < 1) {
			throw new Error("Price must be positive");
		}

		this._price = value;
	}

	static getCount(): number {
		return Product._productCount;
	}

	getDetails(): string {
		return `ID: ${this.id}, Name: ${this._name}, Price: $${this._price}`;
	}
}

class Inventory {
	private products: Product[] = [];

	addProduct(product: Product): void {
		this.products.push(product);
	}

	listProducts(): string {
		let temp: string[] = [];

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
