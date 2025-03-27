import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiFacultyService } from '../../api-faculty.service';

@Component({
  selector: 'app-faculty',
  standalone: true, 
  imports: [FormsModule, CommonModule], 
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css'] 
})
export class FacultyComponent {
  faculty = { 
    id: 0, 
    name: "", 
    designation: "", 
    degree: "", 
    experience: "", 
    imgURL: "" 
  };

  submitted = false;

  // onSubmit(form: any) {
  //   if (form.valid) {
  //     this.submitted = true;
  //     console.log('Faculty Data:', this.faculty); 

  //     if(this.faculty.id ==0){
  //       this.faculties = [...this.faculties,
  //          {...this.faculty, id: this.faculties.length > 0 ? this.faculties[this.faculties.length-1].id + 1 : 1 }
  //         ]
  //     }
  //     else{
  //       this.faculties = this.faculties.map((fac) => fac.id == this.faculty.id ? this.faculty : fac)
  //     }





  //     this.faculty = { id: 0, name: "", designation: "", degree: "", experience: "", imgURL: "" };
  //     form.resetForm();
  //   }
  // }


 faculties = [
  {
    id : 1, 
    name : "Dr. Gopi Sanghani", 
    designation : "Dean - Computer Science", 
    degree : "Ph.D. , M.E. (CE)", 
    experience : "24+ Years", 
    imgURL : "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/5---29-04-2023-11-00-29.jpg"
  },
  {
    id : 2, 
    name : "Dr. Nilesh Gambhava", 
    designation : "Professor", 
    degree : "Ph.D. , M.E. (CE)", 
    experience : "22+ Years", 
    imgURL : "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg"
  },
  {
    id : 3, 
    name : "Dr. Pradyumansinh Jadeja", 
    designation : "Professor", 
    degree : "Ph.D. , M.E. (CE)", 
    experience : "19+ Years", 
    imgURL : "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/6---28-04-2023-02-06-07.jpg"
  },
  {
    id : 4, 
    name : "Prof. Maulik Trivedi", 
    designation : "Professor", 
    degree : "Ph.D. , M.E. (CE)", 
    experience : "12+ Years", 
    imgURL : "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/8---28-04-2023-02-06-25.jpg"
  },
  {
    id : 5, 
    name : "Prof. Firoz Sherasiya", 
    designation : "Professor", 
    degree : "Ph.D.(Pursuing), M.E. (CE)", 
    experience : "20+ Years", 
    imgURL : "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/12---28-04-2023-02-06-51.jpg"
  },
  ]

  // onDelete(id : any){
  //   this.faculties = this.faculties.filter((fac) => fac.id != id)
  // }

  // onEdit(fac : any){
  //   this.faculty = {...fac}
  // }



   ///////mock api/////////////////////////////////////////////////
   constructor(private _apifaculty: ApiFacultyService) {}

   fetchFaculties() {
     this._apifaculty.getAll().subscribe((res: any) => {
       this.faculties = res;
     });
   }
 
   ngOnInit() {
     this.fetchFaculties();
   }
 
   onSubmit(form: any) {
     if (form.valid) {
       this.submitted = true;
       console.log('Faculty Data:', this.faculty);
 
       if (this.faculty.id == 0) {
         this._apifaculty.addFaculty(this.faculty).subscribe(() => {
           this.fetchFaculties();
         });
       } else {
         this._apifaculty.updateFaculty(this.faculty.id, this.faculty).subscribe(() => {
           this.fetchFaculties();
         });
       }
 
       this.faculty = { id: 0, name: "", designation: "", degree: "", experience: "", imgURL: "" };
       form.resetForm();
     }
   }

   onDelete(id: any) {
     console.log(id);
     
     this._apifaculty.deleteById(id).subscribe(() => {
       this.fetchFaculties();
     });
   }
 
   onEdit(fac: any) {
     this.faculty = { ...fac };
   }
 
  
  
}