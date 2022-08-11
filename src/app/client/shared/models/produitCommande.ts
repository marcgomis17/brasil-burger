import { Produit } from "./produit";

export interface ProduitCommande {
    quantite: number;
    produit: Produit;
}