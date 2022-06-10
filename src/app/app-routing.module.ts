//import { CrearAnuncioComponent } from './crearanuncio/crearanuncio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AccesoComponent } from './acceso/acceso.component';
//import {AccesoadminComponent} from './acceso'
//import { BusquedaComponent } from './busqueda/busqueda.component';
//import { AccesoadminComponent } from './accesoadmin/accesoadmin.component';
import { RegistroComponent } from './registro/registro.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { SubcategoriasComponent } from './subcategorias/subcategorias.component';
import { AnuncioComponent } from './anuncio/anuncio/anuncio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
//import { AnunciosComponent } from './anuncios/anuncios.component';
import {  CrearanuncioComponent} from './crearanuncio/crearanuncio.component'

const routes: Routes = [  

  { path: 'home', component:HomeComponent },
  { path: 'acceso', component: AccesoComponent },
  //{ path: 'accesoadmin', component: AccesoadminComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'administracion', component: AdministracionComponent },
  { path: 'subcategorias/:id', component: SubcategoriasComponent},
  { path: 'usuario/:id', component: UsuariosComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'anuncios/:anuncio_id', component: AnuncioComponent},
  { path: 'crearanuncio', component: CrearanuncioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
