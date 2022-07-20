import { Component, OnInit } from '@angular/core';
import { Coleccion } from 'src/app/model/coleccion';
import { ColeccionesService } from 'src/app/services/colecciones.service';

@Component({
  selector: 'app-coleccion',
  templateUrl: './coleccion.component.html',
  styleUrls: ['./coleccion.component.css']
})
export class ColeccionComponent implements OnInit {
  colecciones:Coleccion[]=[];

  constructor(private coleccionService:ColeccionesService) { }

  ngOnInit(): void {
    this.coleccionService.getDataColecciones().subscribe(data => {this.colecciones=data});    
  }

}
