import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';


//import { DataserviceService } from '../dataservice.service';
//import { ActivatedRoute, Route, Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class InicioCategoriasService {
  map(arg0: (item: any) => any) {
    throw new Error('Method not implemented.');
  }
  forEach(arg0: (currentValue: any, index: any) => void) {
    throw new Error('Method not implemented.');
  }
  splice(index: any, arg1: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) { }
  getTodasCategorias() {
    return this.httpClient.get<any>('http://localhost:8000/api/categoriassub/');

  }
}
