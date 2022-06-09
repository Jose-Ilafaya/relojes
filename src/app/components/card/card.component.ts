import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
// public infoRelojes: Relojes[]=[];
// reloj!:Relojes                             
//para agregar al constructor (private relojService:RelojService)
//ngOnInit{this.relojservice.getDataReloj().subscribe((resp:RelojDescripcion[]=>{this.infoRelojes=resp;}))}
  constructor() { }

  ngOnInit(): void {
  }

}
