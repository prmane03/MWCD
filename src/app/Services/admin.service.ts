import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  apiUrl:string="http://localhost:8086/WESpringBoot/admins";
  constructor(private http:HttpClient) { }

  // TO list all admins 
  getAll()
  {
    return this.http.get(`${this.apiUrl}`);
  }
  getByEmail(email:String):Observable<any>
  {
    return this.http.get(`http://localhost:8086/WESpringBoot/adminsByEmail/${email}`);
  }

  fetchByEmail(email:String):Observable<any>
  {
    return this.http.get(`http://localhost:8086/WESpringBoot/getAdminsByEmail/${email}`);
  }

  getById(id:any):Observable<any>
  {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  //To Add admins
  create(data:any):Observable<any>{
    let API = `${this.apiUrl}`;
    return this.http.post(API,data);
  }

  //To update a admin
  update(id:any,data:any):Observable<any>
  {
    return this.http.put(`${this.apiUrl}/${id}`,data);
  }

  //TO delete a admin
  delete(id:any):Observable<any>
  {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }

}
