import { Component, OnInit } from '@angular/core';
import { AboutMeService } from '../Services/aboutme.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  aboutme: any = {};

  constructor(private aboutMeService: AboutMeService) {  }

  ngOnInit(): void {
      this.aboutMeService.getAboutMe().subscribe((aboutme)=>[
        this.aboutme = aboutme[0]
      ])
  }
}

