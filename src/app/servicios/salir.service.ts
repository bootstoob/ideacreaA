import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SalirService {

  constructor(private router:Router) { }
  salir(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);  
  }
}
