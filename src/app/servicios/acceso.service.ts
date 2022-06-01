import { Usuario } from './../modelos/Usuario';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
//import { Observable } from 'rxjs/dist/types/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class AccesoService {

  constructor(public auth: AuthService, private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) { }
  
  //podemos manejar el problema de cors, además de métodos
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  /**
   * Login de usuario
   * @param email
   * @param password
   */
  /*
  loginuser(email: string, password: string): Observable<any> {
    return this.http
      .post<UserInterface>(
        '${ environment.API_ENDPOINT }/usuario',
        { email, password },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }*/

  //acceso method
  logIn(email:string, password:string): Observable<any> {
   return this._http.get<any>("http://localhost:8000/api/auth/acceso?email="+email+"&password="+password)
   .pipe(map((data: any)=>data));
  }

}
