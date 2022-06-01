import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriasService {

    
  constructor(private httpClient: HttpClient) { 

  }
  
    getSubcategoria(){
    //return this.httpClient.get<any>('http://localhost:8000/api/subcategoria/'+this.id+'/'+this.idsubcat+'');

  }
}