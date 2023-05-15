import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducacionComponent } from './educacion/educacion.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SkillsPanelComponent } from './paneles-dashboard/skills-panel/skills-panel.component';
import { SkillsFormComponent } from './forms/skills-form/skills-form.component';
import { RedesPanelComponent } from './paneles-dashboard/redes-panel/redes-panel.component';
import { RedesFormComponent } from './forms/redes-form/redes-form.component';
import { AboutMePanelComponent } from './paneles-dashboard/aboutme-panel/aboutme-panel.component';
import { ExperienciaPanelComponent } from './paneles-dashboard/experiencia-panel/experiencia-panel.component';
import { ExperienciaFormComponent } from './forms/experiencia-form/experiencia-form.component';
import { EducacionFormComponent } from './forms/educacion-form/educacion-form.component';
import { EducacionPanelComponent } from './paneles-dashboard/educacion-panel/educacion-panel.component';
import { ProyectosFormComponent } from './forms/proyectos-form/proyectos-form.component';
import { ProyectosPanelComponent } from './paneles-dashboard/proyectos-panel/proyectos-panel.component';
import { BannerPanelComponent } from './paneles-dashboard/banner-panel/banner-panel.component';
import { interceptorProvider } from './Services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    AboutMeComponent,
    EducacionComponent,
    FooterComponent,
    SkillsComponent,
    ProyectosComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    ExperienciaComponent,
    DashboardComponent,
    SkillsPanelComponent,
    SkillsFormComponent,
    RedesPanelComponent,
    RedesFormComponent,
    AboutMePanelComponent,
    ExperienciaPanelComponent,
    ExperienciaFormComponent,
    EducacionFormComponent,
    EducacionPanelComponent,
    ProyectosFormComponent,
    ProyectosPanelComponent,
    BannerPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
