import { Component } from '@angular/core';
import { ProyectosService } from '../Services/proyectos.service';
import { Proyecto } from '../model/proyectos';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  proyectos: Proyecto[] = [];

  constructor(private proyectoService:ProyectosService) { }

  ngOnInit(): void {
      this.proyectoService.getProyecto().subscribe((proyectos)=>[
        this.proyectos = proyectos
      ])
      
  }
}