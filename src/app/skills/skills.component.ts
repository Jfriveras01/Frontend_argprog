import { Component, OnInit} from '@angular/core';
import { SkillsService } from '../Services/skills.service';
import { Skills } from '../model/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  hardskill: Skills[] = [];
  softskill: Skills[] = [];

  constructor(private skillService:SkillsService) { }

  ngOnInit(): void {
      this.skillService.getHardSkills().subscribe((hardskill)=>[
        this.hardskill = hardskill
      ])
        
      this.skillService.getSoftSkills().subscribe((softskill)=>[
        this.softskill = softskill
      ])
  }


      

}
