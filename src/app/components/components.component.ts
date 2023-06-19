
import { IProduct } from '../model/product';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../data/products';
@Component({
  selector: 'app-products',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent {
  
    details = false
    products: any[];
    product: any;
  
    constructor(private route: ActivatedRoute, private productService: ProductService) {
      this.products = this.productService.getProduct();
    }
  
    ngOnInit() {
      const productId =+ this.route.snapshot.paramMap.get('id')!;
      this.product = this.products.find(product => product.id === productId);
    }
  }