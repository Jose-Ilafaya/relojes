import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(){
    window.addEventListener("scroll",function(){
      let menu= document.getElementById("menu");
      //var logo=document.getElementById("logo")
      menu?.classList.toggle("abajo",window.scrollY>0)
    })

  }
  menuActivado(){
    if(window.scrollY<1){
      let menu=document.getElementById("menu");
      menu?.classList.add("abajo")
    }
  }
  ngOnInit(): void {

  }
}
