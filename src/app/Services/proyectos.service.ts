import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyectos';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ProyectosService {
  private apiUrl='http://localhost:8080/proyectos/'

  proyectos: Proyecto[] = [];

  constructor(private http:HttpClient) { }

  getProyecto():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.apiUrl + 'lista')
  }
  updateProyecto(proyectos:Proyecto):Observable<Proyecto>{
    const url = `${this.apiUrl}update/${proyectos.id}`
    return this.http.put<Proyecto>(url, proyectos, )
  }
  

  addProyecto(proyectos: Proyecto):Observable<Proyecto>{
    return this.http.post<Proyecto>(this.apiUrl + 'create', proyectos)
  }

  deleteProyecto(proyectos:Proyecto): Observable<Proyecto>{
    const url = `${this.apiUrl}delete/${proyectos.id}`
    return this.http.delete<Proyecto>(url)
  }
}
