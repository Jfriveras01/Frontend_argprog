import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Experiencia } from '../model/experiencia';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiUrl='http://localhost:4201/experiencia'
  constructor(private http:HttpClient) { }

  getExperiencias():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.apiUrl)
  }

  updateExperiencia(exp: Experiencia):Observable<Experiencia>{
    const url = `${this.apiUrl}/${exp.id}`
    return this.http.put<Experiencia>(url, exp, httpOptions)
  }
  

  addExperiencia(exp: Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(this.apiUrl, exp, httpOptions)
  }

  deleteExperiencia(exp:Experiencia): Observable<Experiencia>{
    const url = `${this.apiUrl}/${exp.id}`
    return this.http.delete<Experiencia>(url)
  }
}
