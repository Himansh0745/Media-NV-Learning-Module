// class User {
//     email: string;
//     name: string;
//     city: string
//     constructor(email: string, name: string, city: string) {
//         this.email = email;
//         this.name = name;
//         this.city = city;
//     }
// }

// const Himanshu = new User("himanshu@example.com", "Himanshu", "Delhi");

// // Visible output for terminal
// console.log("The data of the Himanshu is : ", Himanshu);



class Products{
    name: string;
    price: number;
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
    buyProducts(){
        if(this.inCart){
            return `Purchasing product: ${this.name} for $${this.price}.`;
        }else{
            return `Please add the product: ${this.name} to cart before purchasing.`;
        }
    }
}

var products = new Products("Samsung", 100000, 101);
products.addToCart();
console.log(products.buyProducts());