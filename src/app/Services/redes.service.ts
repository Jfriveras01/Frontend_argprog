import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Redes } from '../model/redes'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})



export class RedesService {
  private apiUrl='http://localhost:4201/redes'

  constructor(private http:HttpClient) { }

  getRedes():Observable<Redes[]>{
    return this.http.get<Redes[]>(this.apiUrl)
  }

  updateRedes(red: Redes):Observable<Redes>{
    const url = `${this.apiUrl}/${red.id}` 
    return this.http.put<Redes>(url, red, httpOptions)

  }


}
