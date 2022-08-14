import { ProduitCommande } from "src/app/shared/models/produitCommande";
import { Quartier } from "src/app/shared/models/quartier";

export interface Panier {
    quartier?: Quartier,
    burgers?: ProduitCommande[],
    menus?: ProduitCommande[],
    frites?: ProduitCommande[],
    boissons?: ProduitCommande[],
}