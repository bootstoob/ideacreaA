import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SubcategoriasService } from '../servicios/subcategorias.service';
import { Subcategoria } from '../modelos/Subcategoria';
import { Anuncio } from '../modelos/Anuncio';

@Component({
  selector: 'app-subcategorias',
  templateUrl: './subcategorias.component.html',
  styleUrls: ['./subcategorias.component.scss'],
})

export class SubcategoriasComponent implements OnInit {
  subcategoria!: Subcategoria;
  id: any;
  constructor(private _http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.verSubCategoria();
  }

  verSubCategoria() {
    this._http.get<any>('http://localhost:8000/api/subcategoria/' + this.id).subscribe(response => {
      this.subcategoria = response;
      //this.anuncios = response;
    })
  }
}
