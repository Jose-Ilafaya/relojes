import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { AboutComponent } from './about/about.component';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ColeccionComponent } from './coleccion/coleccion.component';
import { HttpClientModule } from '@angular/common/http';
import { ColeccionesService } from '../services/colecciones.service';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    NotPageFoundComponent,
    LoginComponent,
    ColeccionComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ComponentsModule,
    RouterModule,
    HttpClientModule
  ],
  providers:[
    ColeccionesService
  ],

  exports:[
    AboutComponent
  ]
})
export class PagesModule { }
