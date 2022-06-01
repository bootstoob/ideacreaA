import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Anuncio } from 'src/app/modelos/Anuncio';
 
@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.scss']
})
export class AnuncioComponent implements OnInit {
  anuncio!: Anuncio;
  anuncio_id: any;
  
  constructor(private _http: HttpClient, private router: Router, private route: ActivatedRoute) { 
    this.anuncio_id = this.route.snapshot.paramMap.get('anuncio_id');
  }


  ngOnInit(): void {
    this.verAnuncio();
    
  }

  verAnuncio(){
    this._http.get<any>('http://localhost:8000/api/anuncio/'+this.anuncio_id).subscribe(response =>{ 
       this.anuncio = response;
      })
    }

}
