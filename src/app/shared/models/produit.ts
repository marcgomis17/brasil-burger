import { MenuBurger } from "./menuBurger";
import { MenuFrite } from "./menuFrite";
import { MenuTaille } from "./menuTaille";

export interface Produit {
    type?: string;
    id?: number;
    nom: string;
    prix: number;
    image: string;
    menuBurgers?: MenuBurger[];
    menuFrites?: MenuFrite[];
    menuTailles?: MenuTaille[];
    added: boolean;
}