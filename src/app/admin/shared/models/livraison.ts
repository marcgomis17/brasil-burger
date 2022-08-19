import { User } from "src/app/shared/models/user";
import { Zone } from "src/app/shared/models/zone";

export interface Livraison {
    livreur?: User,
    zone?: Zone,
    commandes: Object[]
}