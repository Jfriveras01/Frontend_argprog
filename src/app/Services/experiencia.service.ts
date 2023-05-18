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
  private apiUrl = 'https://bknfr.onrender.com/exp/'

  constructor(private http:HttpClient) { }

  getExperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.apiUrl + 'lista')
  }

  updateExperiencia(experience: Experiencia):Observable<Experiencia>{
    const url = `${this.apiUrl}update/${experience.id}`
    return this.http.put<Experiencia>(url, experience)
  }

  addExperiencia(experience: Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(this.apiUrl + 'create', experience)
  }

  deleteExperiencia(experience:Experiencia): Observable<Experiencia>{
    const url = `${this.apiUrl}delete/${experience.id}`
    return this.http.delete<Experiencia>(url)
  }
}