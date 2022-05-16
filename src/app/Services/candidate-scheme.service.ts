import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateSchemeService {

  apiUrl:string="http://localhost:8086/candidateScheme";
  constructor(private http:HttpClient) { }

  // TO list all candidates 
  getAll()
  {
    return this.http.get(`${this.apiUrl}`);
  }

  getById(id:any):Observable<any>
  {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  //To Add Candidates
  create(data:any):Observable<any>{
    let API = `${this.apiUrl}`;
    return this.http.post(API,data);
  }

  //To update candidate
  update(id:any,data:any):Observable<any>
  {
    return this.http.put(`${this.apiUrl}/${id}`,data);
  }

  //TO delete Candidate
  delete(id:any):Observable<any>
  {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }

}
