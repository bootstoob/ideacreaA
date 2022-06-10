import { Token } from '@angular/compiler/src/ml_parser/tokens';
import { Anuncio } from './Anuncio';
export interface Usuario{
    id?:string;
    email?: string;
    password?: string;
    nombre?: string;
    descripcion?: string;
    token?: Array<Token>;
    anuncios?: Array<Anuncio>
}