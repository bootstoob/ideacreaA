import { SalirService } from './../servicios/salir.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, NavigationExtras, Route, Router } from '@angular/router';
//import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  data: any;
  buscarForm!: FormGroup;
  constructor( private router: Router, private formBuilder: FormBuilder, private salirService: SalirService) { }

  ngOnInit(): void {
    this.buscarForm = this.formBuilder.group({
      buscar: ['']
    })
  }

  
  salir(){
    localStorage.removeItem('token');
    this.salirService.salir();
    //console.log('email');
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