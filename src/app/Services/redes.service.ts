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
  private apiUrl='https://bknfr.onrender.com/red/'

  constructor(private http:HttpClient) { }

  getRedes():Observable<Redes[]>{
    return this.http.get<Redes[]>(this.apiUrl + 'lista')
  }

  updateRedes(red: Redes):Observable<Redes>{
    const url = `${this.apiUrl}update/${red.id}` 
    return this.http.put<Redes>(url, red)

  }


}
