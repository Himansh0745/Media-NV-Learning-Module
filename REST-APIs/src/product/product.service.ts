import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    { id: 1, name: 'Mobile', price: 25000 },
    { id: 2, name: 'Tab', price: 55000 },
    { id: 3, name: 'lappy', price: 250000},
    
  ];

  getAllProducts(){
        return this.products;
    }
    getProductById(id:number){
        return this.products.find((product)=>
        product.id === id)
        
    }
}
