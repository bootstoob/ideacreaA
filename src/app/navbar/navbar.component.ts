import { Token } from '@angular/compiler/src/ml_parser/tokens';
import { SalirService } from './../servicios/salir.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, NavigationExtras, Route, Router } from '@angular/router';
import { Usuario } from '../modelos/Usuario';
import { HttpClient } from '@angular/common/http';
//import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  //data: any;
  buscarForm!: FormGroup;
  usuario!: Usuario;
  id: any;
  token: any;
  nombre: any;

  constructor( private route: ActivatedRoute, private router:Router, private _http: HttpClient , private formBuilder: FormBuilder, private salirService: SalirService) { 
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.buscarForm = this.formBuilder.group({
      buscar: ['']
    })
    this.token = this.readLocalStorageValue('token');
    this.nombre = this.readLocalStorageValue('nombre');
    this.id = this.readLocalStorageValue('id');
  }
  
  readLocalStorageValue(key: string) {
    return localStorage.getItem(key);
}

  salir(){
    let token = localStorage.getItem("token");
    console.log(token);
    localStorage.removeItem('token');
    //this.salirService.salir();
    console.log('token');
    this.router.navigate(['/acceso']);  
  }

/*
  //(input)="getanuncios($event)"
  getanuncios(titulo: any) {
    const palabraclave = titulo.target.value;
    const buscar = this.dataService.getAnunciosTitulo(palabraclave).then(response => {
      this.data = response;
      // console.log(this.data);

    });
  }

  //el clik pasa por aquí: (click)="busqueda(result)
  busqueda(result: any) {
    console.log(result);
    this.buscarForm.reset();

    const navigationExtras: NavigationExtras = {
      queryParams: {
        result: JSON.stringify(result)
      }

    }

    this.router.navigate(['/anuncio'], navigationExtras);
    this.data = null;
  }

*/

}