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
        nombre:"kiwi",
        img:"../../../assets/imgs/AMAZFITGTR3-3.png",
        descripcion:"iwwwwwwwwwwwwwojhaosijdoaisd"
      }
    ]
  }

}
