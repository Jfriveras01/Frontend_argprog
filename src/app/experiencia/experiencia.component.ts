import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from '../Services/experiencia.service';
import { Experiencia } from '../model/experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit{
  experiencias: Experiencia[] = [];

  constructor(private experienciaService:ExperienciaService) { }

  ngOnInit(): void {
      this.experienciaService.getExperiencias().subscribe((experiencias)=>[
        this.experiencias = experiencias
      ])
  
  }


}