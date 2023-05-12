import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/model/proyectos';

@Component({
  selector: 'app-proyectos-form',
  templateUrl: './proyectos-form.component.html',
  styleUrls: ['./proyectos-form.component.css']
})
export class ProyectosFormComponent {
  @Input() proyectos?:Proyecto;
  @Output() onSaveProyecto: EventEmitter<Proyecto> = new EventEmitter();
  @Output() onDeleteProyecto: EventEmitter<Proyecto> = new EventEmitter();

  proyectosForm: FormGroup;
  url:string = "";
  portada:string = "";
  titulo:string = "";
  descripcion:string = "";
 

  constructor(private formBuilder: FormBuilder) {
    this.proyectosForm = this.formBuilder.group ({
      url:['',[Validators.required]],
      portada:['',[Validators.required]],
      titulo:['',[Validators.required]],
      descripcion:['',[Validators.required]],

    })
  }

  onSave(){
    if(this.proyectos){
      this.proyectos.url = this.proyectosForm.value.url
      this.proyectos.portada = this.proyectosForm.value.portada
      this.proyectos.titulo = this.proyectosForm.value.titulo
      this.proyectos.descripcion = this.proyectosForm.value.descripcion
      this.onSaveProyecto.emit(this.proyectos)
      console.log(this.proyectos);
      
      this.proyectosForm.reset()
    }else{
      this.url= this.proyectosForm.value.url
      this.portada = this.proyectosForm.value.portada
      this.titulo= this.proyectosForm.value.titulo
      this.descripcion= this.proyectosForm.value.descripcion
      const{url,portada,titulo,descripcion} = this
      const newExp = {url,portada,titulo,descripcion}
      this.onSaveProyecto.emit(newExp)
      console.log(newExp);
      this.proyectosForm.reset()
    }
  }

  onDelete(proyectos:Proyecto){
    this.onDeleteProyecto.emit(proyectos)
    console.log(proyectos);
    
  }
  
}
