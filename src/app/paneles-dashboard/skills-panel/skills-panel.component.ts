import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/Services/skills.service';
import { Skills } from 'src/app/model/skills';

@Component({
  selector: 'app-skills-panel',
  templateUrl: './skills-panel.component.html',
  styleUrls: ['./skills-panel.component.css']
})
export class SkillsPanelComponent implements OnInit{
  softSkills: Skills[] = [];
  hardSkills: Skills[] = [];
  
  onAddingSK:boolean = false;
  onAddingHK:boolean = false;

  constructor(private skillsService: SkillsService) {  }

  ngOnInit(): void {
    this.skillsService.getSoftSkills().subscribe((softSkills)=>[
      this.softSkills = softSkills
    ])
    
    this.skillsService.getHardSkills().subscribe((hardSkills)=>[
      this.hardSkills = hardSkills
    ])
  }

  toggleOnAddingSK(){
    this.onAddingSK =! this.onAddingSK;
  }
  toggleOnAddingHK(){
    this.onAddingHK =! this.onAddingHK;
  }

  saveSoftChanges(softSkill:Skills){
    this.skillsService.updateSoftSkill(softSkill).subscribe();
    alert("Soft Skill Modificada")
  }
  saveHardChanges(hardSkill:Skills){
    this.skillsService.updateHardSkill(hardSkill).subscribe();
    alert("Hard Skill Modificada")
  }

  addSoftSkill(softSkill:Skills){
    this.skillsService.addSoftSkill(softSkill).subscribe((softSkill)=>[
      this.softSkills.push(softSkill)
    ])
    this.toggleOnAddingSK()
  }
  addHardSkill(hardSkill:Skills){
    this.skillsService.addHardSkill(hardSkill).subscribe((hardSkill)=>[
      this.hardSkills.push(hardSkill)
    ])
    this.toggleOnAddingHK()
  }

  removeSoftSkill(softSkill:Skills){
    this.skillsService.deleteSoftSkill(softSkill).subscribe(()=>[
      this.softSkills = this.softSkills.filter( (s) => s.id !== softSkill.id)
    ])
    alert(softSkill.name + ": Removida")
  }
  removeHardSkill(hardSkill:Skills){
    this.skillsService.deleteHardSkill(hardSkill).subscribe(()=>[
      this.hardSkills= this.hardSkills.filter((e) => e.id !== hardSkill.id)
    ])
    alert(hardSkill.name + ": Removida")
  }
}