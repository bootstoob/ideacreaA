import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-crearanuncio',
  templateUrl: './crearanuncio.component.html',
  styleUrls: ['./crearanuncio.component.scss']
})
export class CrearanuncioComponent implements OnInit {
  crearAnuncioForm!: FormGroup;
  id: any;
  nombre: any;
  today = new Date();
  constructor(  private _http:HttpClient, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.crearAnuncioForm = this.formBuilder.group({
      usuario_id: localStorage.getItem('id'),
      categoria_id:[''],
      subcategoria_id:[''],
      nombre:[''],
      precio:[''],
      forma_contacto:[''],
      fecha_publicacion:this.today,
      descripcion:[''],
    })
    this.getIdentificacion();


  }
  getIdentificacion(){
    return localStorage.getItem('id');
    }
  crearAnuncio() {
    this._http.post<any>('http://localhost:8000/api/crearanuncio', this.crearAnuncioForm.value).subscribe();
    alert("anuncio creado correctamente.");
    this.router.navigate(['/']);
    //no funca
    //this.router.navigate(['http://localhost:4200/usuario/'+localStorage.getItem('id')]);
    this.crearAnuncioForm.reset();
  }
  
}
