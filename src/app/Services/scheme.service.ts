import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchemeService {

  apiUrl:string="http://localhost:8086/WESpringBoot/schemes";
  constructor(private http:HttpClient) { }

  // TO list all schemes 
  getAll()
  {
    return this.http.get(`${this.apiUrl}`);
  }

  getById(id:any):Observable<any>
  {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  //To Add schemes
  create(data:any):Observable<any>{
    let API = `${this.apiUrl}`;
    return this.http.post(API,data);
  }

  //To update a scheme
  update(id:any,data:any):Observable<any>
  {
    return this.http.put(`${this.apiUrl}/${id}`,data);
  }

  //TO delete a scheme
  delete(id:any):Observable<any>
  {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }

}
