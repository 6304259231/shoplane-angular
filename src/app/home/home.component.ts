import { Component , OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';



interface Product {
  id: string;
  name: string;
  preview: string;
  photos: string[];
  description: string;
  isAccessory: boolean;
  brand: string;
  price: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {
  private URI: string = "https://5d76bf96515d1a0014085cf9.mockapi.io/product";

  productsList : Product[] = [];
  constructor(private http:HttpClient){

  }

  ngOnInit(){
    this.fecthData()
  }

  fecthData(){
     this.http.get<Product[]>(this.URI)
     .subscribe((data : Product[])=>{
       return this.productsList = data;
     }, (error)=>{
      console.error('Error:', error); 
     }
    )
  }


}
