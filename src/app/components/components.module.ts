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




@NgModule({
  declarations: [
    CardComponent,
    CarouselComponent,
    ColeccionesComponent,
    CardColeccionComponent,
    BannerComponent,
    HistoriaComponent
  ],
  exports:[
    CardComponent,
    CarouselComponent,
    ColeccionesComponent,
    BannerComponent,
    HistoriaComponent
  ],
  imports: [
    CommonModule,
    ComponentesFijosModule,
    MaterialModule,
    CarouselModule,
    ButtonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
