import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AccesoService } from '../servicios/acceso.service';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.scss']
})

export class AccesoComponent implements OnInit {
  loginForm!: FormGroup; // variable

  constructor(public auth: AuthService, private formBuilder: FormBuilder, private _http: HttpClient, private router: Router,private accesoService: AccesoService) { } //_http es una  variable de uso

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
    
  }

  // acceso method
  //TODO: meter try catch
  logIn(): void {

    this.accesoService.logIn(this.loginForm.value.email,this.loginForm.value.password)
    .subscribe((data: { [x: string]: string; }) => {
      let $token = data["token"];
      if ($token) {
        localStorage.setItem('token', $token);
        this.router.navigate(['/']);
      } else {
        alert("Credenciales incorrectos! acceso.component.ts");
      }
    });
  }

  cerrar() {
    localStorage.removeItem('email');
  }

}