import { Anuncio } from "./Anuncio";

export interface Subcategoria{
     id?: any,
     categoria_id?: any,
     nombre_subcategoria?: any,
     descripcion?: any,
     anuncios?: Array<Anuncio>
}