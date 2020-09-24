import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';
import { SkillsComponent } from './components/skills/skills.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import {ChartsModule} from 'ng2-charts';
import { RadarHabilidadComponent } from './components/radar-habilidad/radar-habilidad.component';
import { BarraHabilidadComponent } from './components/barra-habilidad/barra-habilidad.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SkillsComponent,
    TerminalComponent,
    RadarHabilidadComponent,
    BarraHabilidadComponent,

  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
