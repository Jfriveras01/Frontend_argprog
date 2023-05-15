import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skills } from 'src/app/model/skills';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.css']
})
export class SkillsFormComponent {
  @Input() skill?:Skills;
  @Output() onSaveSkill: EventEmitter<Skills> = new EventEmitter();
  @Output() onDeleteSkill: EventEmitter<Skills> = new EventEmitter();

  skillForm: FormGroup;
  nombre:string = "";
  porcentaje:string = "";

  constructor(private formBuilder: FormBuilder) {
    this.skillForm = this.formBuilder.group({
      name:['',[Validators.required]],
      percentage:['',[Validators.required]]
    })
  }

  onSave(){
    if(this.skill){
      this.skill.nombre = this.skillForm.value.name
      this.skill.porcentaje = this.skillForm.value.percentage
      this.onSaveSkill.emit(this.skill)
      this.skillForm.reset()
    }else{
      this.nombre= this.skillForm.value.name
      this.porcentaje= this.skillForm.value.percentage
      const{nombre,porcentaje} = this
      const newSkill = {nombre,porcentaje}
      this.onSaveSkill.emit(newSkill)
      console.log(newSkill);
      
      this.skillForm.reset()
    }
  }

  onDelete(skill: Skills){
    this.onDeleteSkill.emit(skill)
    console.log(skill);
    
  }

  
}