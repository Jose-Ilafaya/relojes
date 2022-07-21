import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

import { CarouselComponent } from './carousel/carousel.component';

import { ComponentesFijosModule } from '../componentes-fijos/componentes-fijos.module';
import { MaterialModule } from '../material/material.module';

import { ColeccionesComponent } from './colecciones/colecciones.component';

import { CardColeccionComponent } from './card-coleccion/card-coleccion.component';

import { BannerComponent } from './banner/banner.component';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';

import { HistoriaComponent } from './historia/historia.component';
import { RouterModule } from '@angular/router';

import { PrimeTimeLineComponent } from './prime-time-line/prime-time-line.component';
import {TimelineModule} from 'primeng/timeline';
import {CardModule} from 'primeng/card';
import { PrimeLoginCardComponent } from './prime-login-card/prime-login-card.component';

import {PasswordModule} from 'primeng/password';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';







@NgModule({
  declarations: [
    CardComponent,
    CarouselComponent,
    ColeccionesComponent,
    CardColeccionComponent,
    BannerComponent,
    HistoriaComponent,
    PrimeTimeLineComponent,
    PrimeLoginCardComponent
  ],
  exports:[
    CardComponent,
    CarouselComponent,
    ColeccionesComponent,
    BannerComponent,
    HistoriaComponent,
    PrimeTimeLineComponent,
    PrimeLoginCardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ComponentesFijosModule,
    MaterialModule,
    CarouselModule,
    ButtonModule,
    RouterModule,
    TimelineModule,
    CardModule,
    PasswordModule,
    CheckboxModule,
    InputTextModule
  ]
})
export class ComponentsModule { }
