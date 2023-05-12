import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiUrl='http://localhost:4201/educacion'

  constructor(private http:HttpClient) { }

  getEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.apiUrl)
  }

  updateEducacion(edu: Educacion):Observable<Educacion>{
    const url = `${this.apiUrl}/${edu.id}`
    return this.http.put<Educacion>(url, edu, httpOptions)
  }
  

  addEducacion(edu: Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(this.apiUrl, edu, httpOptions)
  }

  deleteEducacion(edu:Educacion): Observable<Educacion>{
    const url = `${this.apiUrl}/${edu.id}`
    return this.http.delete<Educacion>(url)
  }
}
