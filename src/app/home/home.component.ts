import { IconosComponent } from './../iconos/iconos.component';
import { Observable, reduce } from 'rxjs';
import { InicioCategoriasService } from './../servicios/inicio-categorias.service';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Categoria } from '../modelos/Categoria';

interface Iconos{
  icono?: string; 
 }
 interface NumeroCat{
  numCat?: string; 
 }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  //@Input("textoHome") textoHome!: string;
  categorias!: Categoria[];
  public iconos: Iconos[]=[];
  public numeroCat: NumeroCat[]=[];
  subcatContendientes= "Subcategorias contendientes";
  subcatContendientesList= ['Peces','Materias primas','Cuerdas','Chatarra','3D'];

  constructor(private categoria: InicioCategoriasService, private _http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.verTodasCategorias();
  }

  addSubcatContendiente(nuevaSubcatContendiente: any){
    this.subcatContendientesList.push(nuevaSubcatContendiente);
  }

  verTodasCategorias() {
    this.categoria.getTodasCategorias().subscribe(response => {
      this.categorias = response;
    })
    this.iconos=[
      {icono:"Categoría nº1"},
      {icono:"./src/assets/images/icono2.jpeg"},
      {icono:"./src/assets/images/icono3.jpeg"},
      {icono:"./src/assets/images/icono4.jpeg"},
      {icono:"./src/assets/images/icono5.jpeg"},
      {icono:"./src/assets/images/icono6.jpeg"},
      {icono:"./src/assets/images/icono7.jpeg"},
      {icono:"./src/assets/images/icono8.jpeg"},
      {icono:"./src/assets/images/icono9.jpeg"},
    ]
    this.numeroCat=[
      {numCat:"Categoría nº1"},
      {numCat:"Categoría nº2"},
      {numCat:"Categoría nº3"},
      {numCat:"Categoría nº4"},
      {numCat:"Categoría nº5"},
      {numCat:"Categoría nº6"},
      {numCat:"Categoría nº7"},
      {numCat:"Categoría nº8"},
      {numCat:"Categoría nº9"},
    ]
      console.log("CONSOLE LOG DE ICONOS en: home.component.ts"+this.iconos);
  }

}
