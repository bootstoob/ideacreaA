import { Subcategoria } from "./Subcategoria";

export interface Categoria{
     id?: string,
     nombre_categoria?: string,
     subcategorias?: Array<Subcategoria>
}