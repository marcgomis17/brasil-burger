import { Quartier } from "./quartier";

export interface Zone {
    id?: number,
    nom: string,
    quartiers?: Quartier[]
}