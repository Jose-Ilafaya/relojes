import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reloj } from '../model/reloj';
import { Observable } from 'rxjs';

@Injectable({ //usa decorador @ 
  providedIn: 'root'
})
export class RelojServiceService {

  private relojUrl= "assets/data/reloj-data.json" 

  constructor(private http:HttpClient) { }
  
  getDataReloj():Observable<any>{ //
    return this.http.get<Reloj[]>(this.relojUrl)
  }
}
