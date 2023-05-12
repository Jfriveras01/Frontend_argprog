import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AboutMeService } from 'src/app/Services/aboutme.service';

@Component({
  selector: 'app-about-me-panel',
  templateUrl: './aboutme-panel.component.html',
  styleUrls: ['./aboutme-panel.component.css']
})
export class AboutMePanelComponent implements OnInit{
  aboutme: any = {};
  aboutmeForm: FormGroup;

  constructor(private aboutMeService: AboutMeService, private formBuilder: FormBuilder) { 
    this.aboutmeForm = this.formBuilder.group({
      ftPerfil:['',[Validators.required]],
      titulo:['',[Validators.required]],
      ubicacion:['',[Validators.required]],
      descripcion:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.aboutMeService.getAboutMe().subscribe((aboutme)=>[
      this.aboutme = aboutme
    ])
  }

  onSave(){
    if (this.aboutmeForm.value.ftPerfil) {
      this.aboutme.ft_perfil = this.aboutmeForm.value.ftPerfil;
    }

    if (this.aboutmeForm.value.titulo) {
      this.aboutme.titulo = this.aboutmeForm.value.titulo;
    }

    if (this.aboutmeForm.value.ubicacion) {
      this.aboutme.ubicacion = this.aboutmeForm.value.ubicacion;
    }
    if (this.aboutmeForm.value.descripcion) {
      this.aboutme.descripcion = this.aboutmeForm.value.descripcion;
    }
    // console.log(this.about_me);
    // console.log(this.aboutForm.value.ftPerfil);
    this.aboutMeService.updateAboutme(this.aboutme).subscribe()
    alert("se actualizo la informacion")
    this.aboutmeForm.reset()

  }

  get ftPerfil(){
    return this.aboutmeForm.get('ftPerfil')
  }
  get titulo(){
    return this.aboutmeForm.get('titulo')
  }
  get ubicacion(){
    return this.aboutmeForm.get('ubicacion')
  }
  get descripcion(){
    return this.aboutmeForm.get('descripcion')
  }
}