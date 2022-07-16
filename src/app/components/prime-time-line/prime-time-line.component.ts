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
      {status: 'Ordered', date: '15/10/1875', icon: PrimeIcons.ANGLE_DOWN, color: '#607D8B', image: 'fundador.jpg'},
      {status: 'Processing', date: '17/01/1882', icon: PrimeIcons.ANGLE_DOWN, color: '#607D8B'},
      {status: 'Shipped', date: '01/12/1950', icon: PrimeIcons.ANGLE_DOWN, color: '#607D8B'},
      {status: 'Delivered', date: '25/02/2020', icon: PrimeIcons.ANGLE_DOWN, color: '#607D8B'},
      {status: 'Delivered', date: '07/06/2020', icon: PrimeIcons.ANGLE_DOWN, color: '#607D8B'},
      {status: 'Delivered', date: '02/03/2020', icon: PrimeIcons.ANGLE_DOWN, color: '#607D8B'},
      {status: 'Delivered', date: '12/05/2020', icon: PrimeIcons.ANGLE_DOWN, color: '#607D8B'},
  ];
  }

}
