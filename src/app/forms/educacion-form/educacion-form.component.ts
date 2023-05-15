import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-educacion-form',
  templateUrl: './educacion-form.component.html',
  styleUrls: ['./educacion-form.component.css']
})
export class EducacionFormComponent {
  @Input() edu?:Educacion;
  @Output() onSaveEducacion: EventEmitter<Educacion> = new EventEmitter();
  @Output() onDeleteEducacion: EventEmitter<Educacion> = new EventEmitter();

  eduForm:FormGroup;
    titulo:string = "";
    periodo:string = "";
    nombre:string = "";
    detalle:string = "";

  constructor(private formBuilder:FormBuilder) { 
    this.eduForm = this.formBuilder.group({
      tipo:['',[Validators.required]],
      periodo:['',[Validators.required]],
      nombre:['',[Validators.required]],
      detalle:['',[Validators.required]]
    })
  }

  onSave(){
    if(this.edu){
      this.edu.titulo = this.eduForm.value.tipo
      this.edu.periodo = this.eduForm.value.periodo
      this.edu.nombre = this.eduForm.value.nombre
      this.edu.detalle = this.eduForm.value.detalle
      this.onSaveEducacion.emit(this.edu)
      console.log(this.edu);
      
      this.eduForm.reset()
    }else{
      this.titulo= this.eduForm.value.tipo
      this.periodo= this.eduForm.value.periodo
      this.nombre= this.eduForm.value.nombre
      this.detalle= this.eduForm.value.detalle
      const{titulo,periodo,nombre,detalle} = this
      const newEdu = {titulo,periodo,nombre,detalle}
      this.onSaveEducacion.emit(newEdu)
      console.log(newEdu);
      this.eduForm.reset()
    }
  }

  onDelete(edu: Educacion){
    this.onDeleteEducacion.emit(edu)
    console.log(edu);
    
  }
}
