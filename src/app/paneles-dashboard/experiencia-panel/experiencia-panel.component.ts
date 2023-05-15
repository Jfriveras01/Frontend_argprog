import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/Services/experiencia.service';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-experiencia-panel',
  templateUrl: './experiencia-panel.component.html',
  styleUrls: ['./experiencia-panel.component.css']
})
export class ExperienciaPanelComponent implements OnInit {
  exp: Experiencia[] = [];

  onAddingEX: boolean = false;


  constructor(private expService: ExperienciaService) { }

  ngOnInit(): void {
    this.expService.getExperiencia().subscribe((exp)=>[
      this.exp = exp
    ])
  }

  toggleOnAddingEX(){
    this.onAddingEX =! this.onAddingEX;
  }

  saveExperiencia(exp:Experiencia){
    this.expService.updateExperiencia(exp).subscribe();
    alert("Soft Skill Modificada")
  }

  addExperiencia(exp:Experiencia){
    this.expService.addExperiencia(exp).subscribe((exp)=>[
      this.exp.push(exp)
    ])
    this.toggleOnAddingEX()
  }

  removeExperiencia(exp:Experiencia){
    this.expService.deleteExperiencia(exp).subscribe(()=>[
      this.exp = this.exp.filter( (e) => e.id !== exp.id)
    ])
    alert(exp.titulo + ": Removida")
  }
}
