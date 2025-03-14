import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [ CommonModule, FormsModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Comic book'; 
  imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPinE1nF1e_Np00CjsZ-jo81byt3xgOHIFvQ&s"   
  name: any;

  buyNow(){
    alert("Product added to ur cart!");
  }
}
