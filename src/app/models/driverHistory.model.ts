import { Informacion } from "./Informacion.model";

export interface driverHistory{
    rut: string;
    defensiveDriving: string;
    reglamentTest: string;
    practics:Informacion[];
    
}
export class driverHistory{
    rut: string;
    defensiveDriving: string;
    reglamentTest: string;
    practics:Informacion[];
}