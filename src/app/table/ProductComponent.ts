import { Component, Input } from '@angular/core';
import { IProduct } from '../model/product';
import { ProductService } from '../data/products';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class ProductComponent {

  products: any[];
  constructor(private productService:ProductService){
    this.products=this.productService.getProduct()
  }
  
}
