import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BannerService } from 'src/app/Services/banner.service';

@Component({
  selector: 'app-banner-panel',
  templateUrl: './banner-panel.component.html',
  styleUrls: ['./banner-panel.component.css']
})
export class BannerPanelComponent {
  banner: any = {};
  bannerForm: FormGroup

  constructor(private bannerService: BannerService, private formBuilder: FormBuilder) { 
    this.bannerForm = this.formBuilder.group({
      foto:['',[Validators.required]],

    })
  }

  ngOnInit(): void {
    this.bannerService.getBanner().subscribe((banner)=>[
      this.banner = banner
    ])
  }

  onSave(){
    if (this.bannerForm.value.foto) {
      this.banner.foto = this.bannerForm.value.foto;
    }
    this.bannerService.updateBanner(this.banner).subscribe()
    alert("se actualizo el banner")
    this.bannerForm.reset()
  }

  get foto(){
    return this.bannerForm.get('foto')
  }
}
