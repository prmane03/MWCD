import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NGOService {

  apiUrl:string="http://localhost:8086/WESpringBoot/ngo";
  constructor(private http:HttpClient) { }

  // TO list all ngos 
  getAll():Observable<any>
  {
    return this.http.get(`${this.apiUrl}`);
  }

  getByIdEmail(email:String):Observable<any>
  {
    return this.http.get(`http://localhost:8086/WESpringBoot/ngoByEmail/${email}`);
  }

  getById(id:any):Observable<any>
  {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  //To Add NGOs
  create(data:any):Observable<any>{
    let API = `${this.apiUrl}`;
    return this.http.post(API,data);
  }

  //To update NGO
  update(id:any,data:any):Observable<any>
  {
    return this.http.put(`${this.apiUrl}/${id}`,data);
  }

  //TO delete NGO
  delete(id:any):Observable<any>
  {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }

}
