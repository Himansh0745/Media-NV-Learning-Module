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
var Products = /** @class */ (function () {
    function Products(name, price, pId) {
        this.inCart = false;
        this.isOrdered = false;
        this.name = name;
        this.price = price;
        this.pId = pId;
    }
    Products.prototype.addToCart = function () {
        this.inCart = true;
    };
    Products.prototype.buyProducts = function () {
        if (this.inCart) {
            return "Purchasing product: ".concat(this.name, " for $").concat(this.price, ".");
        }
        else {
            return "Please add the product: ".concat(this.name, " to cart before purchasing.");
        }
    };
    return Products;
}());
var products = new Products("Samsung", 100000, 101);
products.addToCart();
console.log(products.buyProducts());
