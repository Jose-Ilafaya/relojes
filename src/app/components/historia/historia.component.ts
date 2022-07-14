import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {
  constructor() { 
  }
  titulo="Nuestra historia"
  informacion="La encantadora Binn, pueblo situado en el cantón del Valais, a orillas del Ródano, destaca, entre otros, por su iglesia parroquial de San Miguel (de 1560) y el puente de piedra del Binna."
  ngOnInit(): void {
  }

}
