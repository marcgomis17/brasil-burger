import { Produit } from "src/app/shared/models/produit";

export interface Catalogue {
    burgers: Produit[];
    menus: Produit[];

}