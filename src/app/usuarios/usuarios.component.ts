import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Anuncio } from '../modelos/Anuncio';
import { Usuario } from './../modelos/Usuario';
import { Token } from '@angular/compiler/src/ml_parser/tokens';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})

export class UsuariosComponent implements OnInit {
  usuario!: Usuario;
  id: any;
  constructor(private _http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    let token = localStorage.getItem("token");
    if (token === null) {
      this.router.navigate(['/acceso']);
    } else {
      this.verUsuario();
    }
  }

  verUsuario() {
    //let datos = JSON.parse(this.idsubcat);
    this._http.get<any>('http://localhost:8000/api/usuario/'+this.id).subscribe(response => {
      this.usuario = response;
      console.log(this.usuario);
    })
  }
}
