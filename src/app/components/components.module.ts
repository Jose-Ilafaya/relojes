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




@NgModule({
  declarations: [
    CardComponent,
    CarouselComponent,
    ColeccionesComponent,
    CardColeccionComponent,
    BannerComponent
  ],
  exports:[
    CardComponent,
    CarouselComponent,
    ColeccionesComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    ComponentesFijosModule,
    MaterialModule,
    CarouselModule
  ]
})
export class ComponentsModule { }
