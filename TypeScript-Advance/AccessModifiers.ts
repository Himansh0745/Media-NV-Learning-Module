class Product{
   private name: string;
   protected price: number;
    pId: number;
    inCart = false;
    isOrdered = false;
    constructor(name: string, price: number, pId: number){
        this.name = name;
        this.price = price;
        this.pId = pId;
    }

    addToCart(): void {
        this.inCart = true;
    }
    buyProduct(){
        if(this.inCart){
            return `Purchasing product: ${this.name} for $${this.price}.`;
        }else{
            return `Please add the product: ${this.name} to cart before purchasing.`;
        }
    }
}

class order extends Product{
    constructor(){
        super("Laptop", 100000, 102);
    }
    getPrice(){
        return this.price;
    }
}
var order1 = new order();
console.log(order1.getPrice());










// var product = new Product("Samsung", 100000, 101);
// product.addToCart();
// console.log(product.buyProduct());

// console.log(product.name); // Property 'name' is private and we can only access this within class 'Product'