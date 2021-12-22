export interface Todo{
    id_persona: number;
    rut: string;
    nombre: string;
    cargo: string;
    empresa: string;
    faena: string;
    Vehiculo: string;
    marca: string;
    modelo:string;
    tipo_caja_cambio:string;
    tipo_rampla:string;
    rut_instructor:string;
    Instructor: string;
    //turno_instructor:string;
    fecha: Date;
    estado: string;
    licencias: string;
    Observacion: string;
    checks:any;
}
export class Todo{
    id_persona: number;
    rut: string;
    nombre: string;
    cargo: string;
    empresa: string;
    faena: string;
    Vehiculo: string;
    marca: string;
    modelo:string;
    tipo_caja_cambio:string;
    tipo_rampla:string;
    rut_instructor:string
    Instructor: string;
    //turno_instructor:string;
    fecha: Date;
    licencias: string;
    estado: string;
    Observacion: string;
    checks:any

    constructor(datos?:Todo){
        if(datos != null)
        {
            this.id_persona = datos.id_persona;
            this.rut = datos.rut;
            this.nombre = datos.nombre;
            this.cargo = datos.cargo;
            this.empresa = datos.empresa;
            this.faena = datos.faena;
            this.Vehiculo = datos.Vehiculo;
            this.marca = datos.marca;
            this.modelo = datos.modelo;
            this.tipo_caja_cambio = datos.tipo_caja_cambio;
            this.tipo_rampla = datos.tipo_rampla;
            this.rut_instructor =datos.rut_instructor;
            this.Instructor = datos.Instructor;
            
            this.fecha = datos.fecha;
            this.licencias = datos.licencias;
            this.estado = datos.estado;
            this.Observacion = datos.Observacion;
            //experiencia
            this.checks = datos.checks;
            return
        }
        this.id_persona = this.id_persona;
        this.rut = this.rut;
        this.nombre = this.nombre;
        this.cargo = this.cargo;
        this.empresa = this.empresa;
        this.faena = this.faena;
        this.Vehiculo = this.Vehiculo;
        this.marca = this.marca;
        this.modelo = this.modelo;
        this.tipo_caja_cambio = this.tipo_caja_cambio;
        this.tipo_rampla = this.tipo_rampla;
        this.rut_instructor = this.rut_instructor;
        this.Instructor = this.Instructor;
        this.fecha = this.fecha;
        this.licencias= this.licencias;
        this.estado = this.estado;
        this.Observacion = this.Observacion;
        //experiencia
        this.checks = this.checks;
    }
}