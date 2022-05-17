import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CandidateCourseService {

  apiUrl:string="http://localhost:8086/WESpringBoot/candidatecourses";
  constructor(private http:HttpClient) { }

  // TO list all candidatecourses 
  getAll()
  {
    return this.http.get(`${this.apiUrl}`);
  }

  getById(id:any):Observable<any>
  {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  //To Add candidatecourses
  create(data:any):Observable<any>{
    let API = `${this.apiUrl}`;
    return this.http.post(API,data);
  }

  //To update a candidatecourses
  update(id:any,data:any):Observable<any>
  {
    return this.http.put(`${this.apiUrl}/${id}`,data);
  }

  //TO delete a candidatecourses
  delete(id:any):Observable<any>
  {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }
}
