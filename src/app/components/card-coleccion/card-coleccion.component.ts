import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Reloj } from 'src/app/model/reloj';
@Component({
  selector: 'app-card-coleccion',
  templateUrl: './card-coleccion.component.html',
  styleUrls: ['./card-coleccion.component.css'],
  encapsulation:ViewEncapsulation.None

})
export class CardColeccionComponent implements OnInit {
  colecciones:Reloj[]=[]
  responsiveOptions:any=[]
  constructor() { }

  ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
    this.colecciones=[
      {
        nombre:"Clasico",
        img:"../../../assets/imgs/CURREN AVIATOR.jpg",
        descripcion:"iwwwwwwwwwwwwwojhaosijdoaisd"
      },
      {
        nombre:"Moderno",
        img:"../../../assets/imgs/AMAZFITGTR3-3.png",
        descripcion:"iwwwwwwwwwwwwwojhaosijdoaisd"
      },
      {
        nombre:"Deportivo",
        img:"../../../assets/imgs/CURREN AVIATOR.jpg",
        descripcion:"iwwwwwwwwwwwwwojhaosijdoaisd"
      },
      {
        nombre:"Lujuso",
        img:"../../../assets/imgs/AMAZFITGTR3-3.png",
        descripcion:"iwwwwwwwwwwwwwojhaosijdoaisd"
      }
    ]
  }

}
