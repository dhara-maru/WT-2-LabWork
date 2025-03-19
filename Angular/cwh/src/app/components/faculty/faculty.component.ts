import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-faculty',
  standalone: true, // Mark as standalone
  imports: [FormsModule, CommonModule], // BrowserModule is not needed in standalone components
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css'] // Fixed 'styleUrl' to 'styleUrls'
})
export class FacultyComponent {
  faculty = { 
    id: "", 
    name: "", 
    designation: "", 
    degree: "", 
    experience: "", 
    imageURL: "" 
  };

  submitted = false;

  onSubmit(form: any) {
    if (form.valid) {
      this.submitted = true;
      console.log('Faculty Data:', this.faculty); 
      this.faculty = { id: "", name: "", designation: "", degree: "", experience: "", imageURL: "" };
      form.resetForm();
    }
  }
}