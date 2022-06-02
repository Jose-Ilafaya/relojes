import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ComponentesFijosModule } from '../componentes-fijos/componentes-fijos.module';



@NgModule({
  declarations: [
    CardComponent,
    CarouselComponent
  ],
  exports:[
    CardComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    ComponentesFijosModule
  ]
})
export class ComponentsModule { }
