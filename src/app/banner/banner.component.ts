import { Component } from '@angular/core';
import { BannerService } from '../Services/banner.service';
import { AboutMeService } from '../Services/aboutme.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  about_me: any = {};

  constructor(private aboutMeService: AboutMeService) {  }

  ngOnInit(): void {
    this.aboutMeService.getAboutMe().subscribe((about_me)=>[
      this.about_me = about_me[0]
    ])
  }
  
}

