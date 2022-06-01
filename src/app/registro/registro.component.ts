import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute, Route, Router} from '@angular/router';
import { AuthService } from '../auth.service';
//import { Usuarios } from '../usuarios/usuarios.component';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  registroForm!:FormGroup;
  message: any;
  data: any;
  constructor( private formBuilder:FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.registroForm = this.formBuilder.group({
        nombre:[''],
        email:[''],
        password:[''],
        descripcion:['']
    })
    let email = localStorage.getItem('email');
    if(email !== null){
      this.router.navigate(['/']);
    } 

  }

  veosiexiste(){
      
  if(this.registroForm.value.descripcion.length>=5 && this.registroForm.value.email.length>=4 && this.registroForm.value.nombre.length>=2 && this.registroForm.value.password.length>=1){
   
    this._http.get<any>("http://localhost:8000/api/registro/").subscribe(res=>{
  const usuarios = res.find((auth:any)=>{
    return auth.email === this.registroForm.value.email;
  })
  // console.log(usuarios);
  // console.log(this.registroForm.value.email);
  if (usuarios === undefined) {
  
  this.registro();
}else {
  alert("Este usuario ya existe en nuestra base de datos");
}
})

  }
 else {

  alert("Todos los campos son requeridos");
}
  }
  registro(){
     this._http.post<any>("http://localhost:8000/api/registro/", this.registroForm.value).subscribe();
     alert("Registrado correctamente.");
     localStorage.setItem('email', this.registroForm.value.email);
      // this.data = res;
      // this.message = this.data.message;
      this.registroForm.reset();
      this.router.navigate(['/'])
    } 
  }
