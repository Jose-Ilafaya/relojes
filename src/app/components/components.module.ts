import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ComponentesFijosModule } from '../componentes-fijos/componentes-fijos.module';
import { MaterialModule } from '../material/material.module';
import { ColeccionesComponent } from './colecciones/colecciones.component';
import { CardColeccionComponent } from './card-coleccion/card-coleccion.component';



@NgModule({
  declarations: [
    CardComponent,
    CarouselComponent,
    ColeccionesComponent,
    CardColeccionComponent
  ],
  exports:[
    CardComponent,
    CarouselComponent,
    ColeccionesComponent
  ],
  imports: [
    CommonModule,
    ComponentesFijosModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
