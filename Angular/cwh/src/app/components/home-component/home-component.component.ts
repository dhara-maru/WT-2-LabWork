import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  active = true;
  myColor = 'blue';

  items = ['Angular', 'React', 'Vue', 'Svelte'];
  selectedFramework = 'Angular';

  togglefun() {
    this.active = !this.active;
  }
}
