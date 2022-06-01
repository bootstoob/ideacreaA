import { Observable, reduce } from 'rxjs';
import { InicioCategoriasService } from './../servicios/inicio-categorias.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Categoria } from '../modelos/Categoria';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  categorias!: Categoria[];

  constructor(private categoria: InicioCategoriasService, private _http: HttpClient, private router: Router) { }

  
  ngOnInit(): void {
   
     
    this.verTodasCategorias();

  }


  verTodasCategorias(){
    this.categoria.getTodasCategorias().subscribe(response =>{ 
       this.categorias = response;
      })

    
  }

}
