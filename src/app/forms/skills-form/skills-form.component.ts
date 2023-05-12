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
  name:string = "";
  percentage:string = "";

  constructor(private formBuilder: FormBuilder) {
    this.skillForm = this.formBuilder.group({
      name:['',[Validators.required]],
      percentage:['',[Validators.required]]
    })
  }

  onSave(){
    if(this.skill){
      this.skill.name = this.skillForm.value.name
      this.skill.percentage = this.skillForm.value.percentage
      this.onSaveSkill.emit(this.skill)
      this.skillForm.reset()
    }else{
      this.name= this.skillForm.value.name
      this.percentage= this.skillForm.value.percentage
      const{name,percentage} = this
      const newSkill = {name,percentage}
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