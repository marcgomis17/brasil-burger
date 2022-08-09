import { MenuTaille } from "./menuTaille";
import { MenuFrite } from "./menuFrite";
import { MenuBurger } from "./menuBurger";

export interface Produit {
    type?: string;
    id?: number;
    nom: string;
    prix: number;
    image: string;
    menuBurgers?: MenuBurger[];
    menuFrites?: MenuFrite[];
    menuTailles?: MenuTaille[];
}