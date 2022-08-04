import { MenuTaille } from "./menuTaille";
import { MenuFrite } from "./menuFrite";

export interface Produit {
    type?: string;
    id?: number;
    nom: string;
    prix: number;
    image: string;
    menuBurgers?: [
        {
            quantite: number;
            burger: Produit;
        }
    ];
    menuFrites?: MenuFrite[];
    menuTailles?: MenuTaille[];
}