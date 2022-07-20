import { Injectable } from '@angular/core';
import { Coleccion } from '../model/coleccion';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ColeccionesService {
  private coleccionUrl="assets/data/coleccion-data.json"
  constructor(private http:HttpClient) { }
    getDataColeccion():Observable<Coleccion[]>{
      return this.http.get<Coleccion[]>(this.coleccionUrl)
    }
}
