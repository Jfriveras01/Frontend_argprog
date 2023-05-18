import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private hardApiUrl='https://bknfr.onrender.com/skillh/'
  private softApiUrl='https://bknfr.onrender.com/skillso/'

  constructor(private http:HttpClient) { }

  getHardSkills():Observable<Skills[]>{
    return this.http.get<Skills[]>(this.hardApiUrl + 'lista')
  }

  getSoftSkills():Observable<Skills[]>{
    return this.http.get<Skills[]>(this.softApiUrl + 'lista')
  }

  updateSoftSkill(skill: Skills):Observable<Skills>{
    const url = `${this.softApiUrl}update/${skill.id}`
    return this.http.put<Skills>(url, skill)
  }

  updateHardSkill(skill: Skills):Observable<Skills>{
    const url = `${this.hardApiUrl}update/${skill.id}`
    return this.http.put<Skills>(url, skill)
  }

  addSoftSkill(skill: Skills):Observable<Skills>{
    return this.http.post<Skills>(this.softApiUrl + 'create', skill)
  }

  addHardSkill(skill: Skills):Observable<Skills>{
    return this.http.post<Skills>(this.hardApiUrl + 'create', skill)
  }
  
  deleteSoftSkill(skill:Skills): Observable<Skills>{
    const url = `${this.softApiUrl}delete/${skill.id}`
    return this.http.delete<Skills>(url)
  }

  deleteHardSkill(skill:Skills): Observable<Skills>{
    const url = `${this.hardApiUrl}delete/${skill.id}`
    return this.http.delete<Skills>(url)
  }
}
