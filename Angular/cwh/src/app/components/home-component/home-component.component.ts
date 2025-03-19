import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  active = true;
  inActive = false;
  myColor = 'blue';

  togglefun(){
    this.active = !this.active;
    this.inActive = !this.inActive;
  }
}
