import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
@Component({
  selector: 'app-prime-time-line',
  templateUrl: './prime-time-line.component.html',
  styleUrls: ['./prime-time-line.component.scss']
})
export class PrimeTimeLineComponent implements OnInit {

  constructor() { }
  events: any[]=[];

  ngOnInit(): void {
    this.events = [
      {date: '1830', icon: PrimeIcons.ANGLE_DOWN, color: '#607D8B', image: 'fundador.jpg', info:'Se registra oficialmente como relojero en los registros del pueblo de Binn. Es el fundador del primer taller de la marca.'},
      { date: '1882', icon: PrimeIcons.ANGLE_DOWN, color: '#607D8B',image:'reloj antiguo.webp', info:'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard'},
      {date: '1950', icon: PrimeIcons.ANGLE_DOWN, color: '#607D8B', info:'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard'},
      { date: '1970', icon: PrimeIcons.ANGLE_DOWN, color: '#607D8B', info:'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard'},
      { date: '1992', icon: PrimeIcons.ANGLE_DOWN, color: '#607D8B', info:'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard'},
      { date: '2010', icon: PrimeIcons.ANGLE_DOWN, color: '#607D8B', info:'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard'},
      { date: '2020', icon: PrimeIcons.ANGLE_DOWN, color: '#607D8B', info:'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard'},
  ];
  }

}
