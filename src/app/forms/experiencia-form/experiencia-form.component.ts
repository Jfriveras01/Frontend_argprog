import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-experiencia-form',
  templateUrl: './experiencia-form.component.html',
  styleUrls: ['./experiencia-form.component.css']
})
export class ExperienciaFormComponent {
  @Input() exp?:Experiencia;
  @Output() onSaveExperiencia: EventEmitter<Experiencia> = new EventEmitter();
  @Output() onDeleteExperiencia: EventEmitter<Experiencia> = new EventEmitter();

  expForm: FormGroup;
  titulo:string = "";
  descripcion:string = "";
  img:string = "";

  constructor(private formBuilder: FormBuilder) {
    this.expForm = this.formBuilder.group({
      titulo:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      img:['',[Validators.required]]
    })
  }

  onSave(){
    if(this.exp){
      this.exp.img = this.expForm.value.img
      this.exp.titulo = this.expForm.value.titulo
      this.exp.descripcion = this.expForm.value.descripcion
      this.onSaveExperiencia.emit(this.exp)
      console.log(this.exp);
      
      this.expForm.reset()
    }else{
      this.img= this.expForm.value.img
      this.titulo= this.expForm.value.titulo
      this.descripcion= this.expForm.value.descripcion
      const{img,titulo,descripcion} = this
      const newExp = {img,titulo,descripcion}
      this.onSaveExperiencia.emit(newExp)
      console.log(newExp);
      this.expForm.reset()
    }
  }

  onDelete(exp: Experiencia){
    this.onDeleteExperiencia.emit(exp)
    console.log(exp);
    
  }
}
