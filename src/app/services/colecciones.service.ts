import { Injectable } from '@angular/core';
import { Coleccion } from '../model/coleccion';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ColeccionesService {
  public coleccionUrl="./assets/data/coleccion-data.json"
  constructor(private http:HttpClient) { 

  }
    getDataColecciones():Observable<Coleccion[]>{
        return this.http.get<Coleccion[]>(this.coleccionUrl)
    }

    
    getColeccion(indice:number){
      let coleccion:any=this.http.get<Coleccion>(this.coleccionUrl + "/" + indice)
      return coleccion
    }
    /*encontrarColeccion(indice:number){
      let coleccion:any=this.coleccionUrl
      alert(coleccion)
      return coleccion
    }*/
}
