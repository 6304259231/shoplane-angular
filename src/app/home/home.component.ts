import { Component, OnInit  } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [CommonModule] 
})
export class HomeComponent implements OnInit {
  productsList: Product[] = [];
  isLoading: boolean = false;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    // Subscribe to the Observable provided by the service
    this.isLoading = true;
    this.productsService.getProducts().subscribe(
      (data: Product[]) => {
        this.productsList = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error:', error);
        this.isLoading = false;
      }
    );
  }
}
