import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccesoComponent } from './acceso/acceso.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SubcategoriasComponent } from './subcategorias/subcategorias.component';
import { FooterComponent } from './footer/footer.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { AdministracionMenuComponent } from './administracion-menu/administracion-menu.component';
import { AnuncioComponent } from './anuncio/anuncio/anuncio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccesoComponent,
    RegistroComponent,
    HomeComponent,
    FooterComponent,
    AdministracionComponent,
    AdministracionMenuComponent,
    SubcategoriasComponent,
    AnuncioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
