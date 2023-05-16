import { Component, OnInit } from '@angular/core';
import { AboutMeService } from '../Services/aboutme.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  aboutme: any = {};

  constructor(private aboutMeService: AboutMeService) {  }

  ngOnInit(): void {
      this.aboutMeService.getAboutMe().subscribe((aboutme)=>[
        this.aboutme = aboutme[0]
      ])
  }

  saveAboutme(aboutme:any){
    this.aboutMeService.updateAboutme(aboutme).subscribe();
    alert("About Me modificado")
  }
}