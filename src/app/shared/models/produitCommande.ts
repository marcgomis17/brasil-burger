import { Produit } from "./produit";

export interface ProduitCommande {
    quantite: number;
    produit?: Produit | any;
    burger?: Produit;
    menu?: Produit;
    frite?: Produit;
    boisson?: Produit;
}