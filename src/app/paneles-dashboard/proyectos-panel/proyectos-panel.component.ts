import { Component } from '@angular/core';
import { ProyectosService } from 'src/app/Services/proyectos.service';
import { Proyecto } from 'src/app/model/proyectos';


@Component({
  selector: 'app-proyectos-panel',
  templateUrl: './proyectos-panel.component.html',
  styleUrls: ['./proyectos-panel.component.css']
})
export class ProyectosPanelComponent {
  proyectos: Proyecto[] = [];

  onAddingPR: boolean = false;

  constructor(private proyectoService: ProyectosService) { }

  ngOnInit(): void {
    this.proyectoService.getProyecto().subscribe((proyectos)=>[
      this.proyectos = proyectos
    ])
  }

  toggleOnAddingPR(){
    this.onAddingPR =! this.onAddingPR;
  }

  saveProyecto(proyectos:Proyecto){
    this.proyectoService.updateProyecto(proyectos).subscribe();
    alert("Proyecto Modificado")
  }

  addProyecto(proyectos:Proyecto){
    this.proyectoService.addProyecto(proyectos).subscribe((proyectos)=>[
      this.proyectos.push(proyectos)
    ])
    this.toggleOnAddingPR()
  }

  removeProyecto(proyectos:Proyecto){
    this.proyectoService.deleteProyecto(proyectos).subscribe(()=>[
      this.proyectos = this.proyectos.filter( (p) => p.id !== proyectos.id)
    ])
    alert(proyectos.titulo + ": Removida")
  }
}
