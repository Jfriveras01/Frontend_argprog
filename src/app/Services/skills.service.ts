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
  private hardApiUrl='http://localhost:4201/hard-skills'
  private softApiUrl='http://localhost:4201/soft-skills'

  constructor(private http:HttpClient) { }

  getHardSkills():Observable<Skills[]>{
    return this.http.get<Skills[]>(this.hardApiUrl)
  }

  getSoftSkills():Observable<Skills[]>{
    return this.http.get<Skills[]>(this.softApiUrl)
  }

  updateSoftSkill(skill: Skills):Observable<Skills>{
    const url = `${this.softApiUrl}/${skill.id}`
    return this.http.put<Skills>(url, skill, httpOptions)
  }

  updateHardSkill(skill: Skills):Observable<Skills>{
    const url = `${this.hardApiUrl}/${skill.id}`
    return this.http.put<Skills>(url, skill, httpOptions)
  }

  addSoftSkill(skill: Skills):Observable<Skills>{
    return this.http.post<Skills>(this.softApiUrl, skill, httpOptions)
  }

  addHardSkill(skill: Skills):Observable<Skills>{
    return this.http.post<Skills>(this.hardApiUrl, skill, httpOptions)
  }
  
  deleteSoftSkill(skill:Skills): Observable<Skills>{
    const url = `${this.softApiUrl}/${skill.id}`
    return this.http.delete<Skills>(url)
  }

  deleteHardSkill(skill:Skills): Observable<Skills>{
    const url = `${this.hardApiUrl}/${skill.id}`
    return this.http.delete<Skills>(url)
  }
}
