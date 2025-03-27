import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiFacultyService {

  constructor(private _http: HttpClient) {}

  API_URL = "https://67e387d42ae442db76d074c7.mockapi.io/facultyAPI/";

  getAll() {
    return this._http.get(this.API_URL);
  }

  deleteById(id: any) {
    return this._http.delete(this.API_URL + id);
  }

  updateFaculty(id: any, faculty: any) {
    return this._http.put(this.API_URL + id, faculty);
  }

  addFaculty(faculty: any) {
    return this._http.post(this.API_URL, faculty);
  }
}
