import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colecciones',
  templateUrl: './colecciones.component.html',
  styleUrls: ['./colecciones.component.css']
})
export class ColeccionesComponent implements OnInit {
  private colecciones:[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
