import { Component, OnInit } from '@angular/core';
import { Reloj } from 'src/app/model/reloj';
@Component({
  selector: 'app-card-coleccion',
  templateUrl: './card-coleccion.component.html',
  styleUrls: ['./card-coleccion.component.css']
})
export class CardColeccionComponent implements OnInit {
  colecciones:Reloj[]=[]
  constructor() { }

  ngOnInit(): void {
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
