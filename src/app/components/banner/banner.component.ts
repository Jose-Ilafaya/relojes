import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }
  titulo='W-12-Clasic'
  subtitulo='Representación de elegancia e innovación'
  informacion='Esta pieza es única en su tipo y fue creada meticulosamente en los talleres de Witouch. '
  ngOnInit(): void {
  }

}
