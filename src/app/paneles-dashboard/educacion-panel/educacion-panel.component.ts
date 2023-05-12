import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/Services/educacion.service';

import { Educacion } from 'src/app/model/educacion';


@Component({
  selector: 'app-educacion-panel',
  templateUrl: './educacion-panel.component.html',
  styleUrls: ['./educacion-panel.component.css']
})
export class EducacionPanelComponent implements OnInit {
  
  edu: Educacion[] = [];

  onAddingED: boolean = false;

  constructor(private eduService: EducacionService) { }

  ngOnInit(): void {
    this.eduService.getEducacion().subscribe((edu)=>[
      this.edu = edu
    ])
  }

  toggleOnAddingED(){
    this.onAddingED =! this.onAddingED;
  }

  saveEducacion(edu:Educacion){
    this.eduService.updateEducacion(edu).subscribe();
    alert("Soft Skill Modificada")
  }

  addEducacion(edu:Educacion){
    this.eduService.addEducacion(edu).subscribe((edu)=>[
      this.edu.push(edu)
    ])
    this.toggleOnAddingED()
  }

  removeEducacion(edu:Educacion){
    this.eduService.deleteEducacion(edu).subscribe(()=>[
      this.edu = this.edu.filter( (e) => e.id !== e.id)
    ])
    alert(edu.nombre + ": Removida")
  }
}
