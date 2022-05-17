import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  apiUrl:string="http://localhost:8086/WESpringBoot/courses";
  constructor(private http:HttpClient) { }

  // TO list all courses 
  getAll()
  {
    return this.http.get(`${this.apiUrl}`);
  }

  getById(id:any):Observable<any>
  {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  //To Add courses
  create(data:any):Observable<any>{
    let API = `${this.apiUrl}`;
    return this.http.post(API,data);
  }

  //To update a courses
  update(id:any,data:any):Observable<any>
  {
    return this.http.put(`${this.apiUrl}/${id}`,data);
  }

  //TO delete a courses
  delete(id:any):Observable<any>
  {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }
}
