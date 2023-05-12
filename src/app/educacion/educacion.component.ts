import { Component, OnInit } from '@angular/core';
import { EducacionService } from '../Services/educacion.service';
import { Educacion } from '../model/educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  edu: Educacion[] = [];

  constructor(private educacionService:EducacionService) { }

  ngOnInit(): void {
      this.educacionService.getEducacion().subscribe((edu)=>[
        this.edu = edu
      ])
        
  }

}
