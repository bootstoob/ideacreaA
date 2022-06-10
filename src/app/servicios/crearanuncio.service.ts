import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class CrearanuncioService {
  constructor(private _http: HttpClient) { }
  postCrearAnuncio() {
    return this._http.post<any>('http://localhost:8000/api/crearanuncio');


  }
}