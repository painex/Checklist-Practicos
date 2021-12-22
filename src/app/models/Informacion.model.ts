export interface Informacion{
    id_persona: number;
    licencias: string;
    rut: string;
    nombre: string;
    cargo: string;
    empresa: string;
    faena: string;
    vehiculo: string;
    marca: string;
    modelo: string;
    tipo_caja_cambio: string;
    tipo_rampla: string;
    rut_instructor: string;
    instructor: string;
    fecha: string;
    estado: string;
    observacion: string;
}
export class Informacion{
    rut_informacion: string
    constructor(datos?:Informacion){
        if(datos != null)
        {
            this.rut_informacion = datos.rut_informacion;
            return
        }
        this.rut_informacion = this.rut_informacion;
    }
}
