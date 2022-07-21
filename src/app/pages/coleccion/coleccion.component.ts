import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coleccion } from 'src/app/model/coleccion';
import { ColeccionesService } from 'src/app/services/colecciones.service';

@Component({
  selector: 'app-coleccion',
  templateUrl: './coleccion.component.html',
  styleUrls: ['./coleccion.component.css']
})
export class ColeccionComponent implements OnInit {
  colecciones:Coleccion[]=[];
  indice!: number;
  coleccionEncontrada:any=[]
  constructor(private coleccionService:ColeccionesService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.coleccionService.getDataColecciones().subscribe(data => {this.colecciones=data});
    this.indice=this.route.snapshot.params['id'];
    /*let coleccion:Coleccion[]=this.coleccionService.getColeccion(this.indice);
    this.coleccionEncontrada=Object.entries(coleccion)
    alert(this.coleccionEncontrada)*/
  }

}
