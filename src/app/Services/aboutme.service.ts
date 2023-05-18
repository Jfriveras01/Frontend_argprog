import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AboutMe } from '../model/aboutme';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  private apiUrl = 'https://bknfr.onrender.com/aboutme/'

  constructor(private http:HttpClient) { }

  getAboutMe():Observable<AboutMe[]>{
    return this.http.get<AboutMe[]>(this.apiUrl + 'lista')
  }

  updateAboutme(about_me: AboutMe):Observable<any>{
    const url = `${this.apiUrl}update/${about_me.id}`
    return this.http.put<AboutMe[]>(url, about_me)
  }
}