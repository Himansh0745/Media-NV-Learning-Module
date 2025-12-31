var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(name, price, pId) {
        this.inCart = false;
        this.isOrdered = false;
        this.name = name;
        this.price = price;
        this.pId = pId;
    }
    Product.prototype.addToCart = function () {
        this.inCart = true;
    };
    Product.prototype.buyProduct = function () {
        if (this.inCart) {
            return "Purchasing product: ".concat(this.name, " for $").concat(this.price, ".");
        }
        else {
            return "Please add the product: ".concat(this.name, " to cart before purchasing.");
        }
    };
    return Product;
}());
var order = /** @class */ (function (_super) {
    __extends(order, _super);
    function order() {
        return _super.call(this, "Laptop", 100000, 102) || this;
    }
    order.prototype.getPrice = function () {
        return this.price;
    };
    return order;
}(Product));
var order1 = new order();
console.log(order1.getPrice());
// var product = new Product("Samsung", 100000, 101);
// product.addToCart();
// console.log(product.buyProduct());
// console.log(product.name); // Property 'name' is private and we can only access this within class 'Product'
