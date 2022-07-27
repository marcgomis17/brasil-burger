export interface User {
    id?: number;
    prenom: string;
    nom: string;
    email: string
    password?: string;
    adresse?: string;
    telephone?: string;
    matriculeMoto?: string;
}