import { Component, OnInit } from '@angular/core';
import { RelojServiceService } from 'src/app/services/reloj-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 //public relojes:reloj[]=[];
//reloj!:Relojes;                            
//para agregar al constructor (private relojService:RelojService)
//ngOnInit{this.relojservice.getDataReloj().subscribe((resp:RelojDescripcion[]=>{this.infoRelojes=resp;}))}
  constructor(private relojService:RelojServiceService) { }

  ngOnInit(): void {

  }

}
