import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from './../modelos/Usuario';
import { AccesoService } from '../servicios/acceso.service';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.scss']
})

export class AccesoComponent implements OnInit {
  loginForm!: FormGroup; // variable
  token!: any;
  id!: any;
  usuario!: any;
  nombre!: any;

  constructor(public auth: AuthService, private formBuilder: FormBuilder, private _http: HttpClient, private router: Router, private accesoService: AccesoService) { } //_http es una  variable de uso

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      id: [''],
      nombre: [''],
      email: [''],
      password: [''],
    })
    if (this.token === null) {
      this.router.navigate(['/home']);
    }

  }

  logIn(): void {
    this.accesoService.logIn(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe((data: { [x: string]: string; }) => {
        let $usuario = data;
        console.log($usuario);
        let $token = data["token"];
        localStorage.setItem('token', $token);
        //let $id = data["usuario.id"];
        let $id = data["id"];
        let $nombre = data["nombre"];
        localStorage.setItem('nombre', $nombre);
        localStorage.setItem('id', $id);
        console.log(data["token"]);
        if ($token) {
          localStorage.setItem('token', $token);
          localStorage.setItem('nombre', $nombre);
          localStorage.setItem('id', $id);
          //localStorage.setItem('id', $id);
          this.router.navigate(['/usuario/' + $id]);
        } else {
          alert("Credenciales incorrectos! acceso.component.ts");
        }
      });
  }



}