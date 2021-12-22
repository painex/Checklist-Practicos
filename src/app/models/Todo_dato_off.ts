import { runInThisContext } from 'vm';

export interface Todo_dato_off{
    id_persona: number;
    rut: string;
    nombre: string;
    cargo: string;
    empresa: string;
    faena: string;
    Vehiculo: string;
    marca:string;
    modelo:string;
    tipo_caja_cambio:string;
    tipo_rampla:string;
    rut_instructor: string;
    Instructor: string;
    //turno_instructor: string;
    fecha: Date;
    elestado:boolean;
    estado: string;
    licencias: string;
    Observacion: string;
    //Pre operacional
    chequeo_pre_operacion: number;
    interior_cabina_pickup: number;
    revisa_vehiculo_antes: number;
    revisa_equipo_epp: number;
    //Conducción
    uso_espejos_punto_ciego:number;
    conduce_manos_volante:number;
    uso_frenos: number;
    hace_buen_uso_marcha:number;
    uso_embrague:number;
    estaciona_acorde_terreno:number;
    //Seguridad
    respeta_senializacion: number;
    mira_anticipacion:number;
    controla_riesgo_ruta: number;
    demuestra_conduccion_segura:number;
    //CONOCIMIENTO OPERACIONAL GENERAL 
    traccion_4h4l: number;
    opera_sistema_radial: number;
    domina_porc_cadena:number;
    entiende_operacion_vehiculo:number;
    //Actitud y Experiencia
    refleja_experiencia:number;
    actitud_evaluacion:number;
    
    nota:number;
}


export class Todo_dato_off{
    id_persona: number;
    rut: string;
    nombre: string;
    cargo: string;
    empresa: string;
    faena: string;
    Vehiculo: string;
    marca:string;
    modelo:string;
    tipo_caja_cambio:string;
    tipo_rampla:string;
    rut_instructor:string;
    Instructor: string;
    //turno_instructor:string;
    fecha: Date;
    elestado:boolean;
    estado: string;
    licencias: string;
    Observacion: string;
     //Pre operacional
     chequeo_pre_operacion: number;
     interior_cabina_pickup: number;
     revisa_vehiculo_antes: number;
     revisa_equipo_epp: number;
     //Conducción
     uso_espejos_punto_ciego:number;
     conduce_manos_volante:number;
     uso_frenos: number;
     hace_buen_uso_marcha:number;
     uso_embrague:number;
     estaciona_acorde_terreno:number;
     //Seguridad
     respeta_senializacion: number;
     mira_anticipacion:number;
     controla_riesgo_ruta: number;
     demuestra_conduccion_segura:number;
     //CONOCIMIENTO OPERACIONAL GENERAL 
     traccion_4h4l: number;
     opera_sistema_radial: number;
     domina_porc_cadena:number;
     entiende_operacion_vehiculo:number;
     //Actitud y Experiencia
     refleja_experiencia:number;
     actitud_evaluacion:number;
    nota:number;


    constructor(datos?:Todo_dato_off){
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
            this.licencias = datos.licencias;
            this.modelo = datos.modelo;
            this.tipo_caja_cambio = datos.tipo_caja_cambio;
            this.tipo_rampla = datos.tipo_rampla
            this.rut_instructor = datos.rut_instructor;
            this.Instructor = datos.Instructor;
            //this.turno_instructor = datos.turno_instructor;
            this.fecha = datos.fecha;
            this.estado = datos.estado;
            this.Observacion = datos.Observacion;
            //pre operacional
            this.chequeo_pre_operacion = datos.chequeo_pre_operacion;
            this.interior_cabina_pickup = datos.interior_cabina_pickup;
            this.revisa_vehiculo_antes = datos.revisa_vehiculo_antes;
            this.revisa_equipo_epp = datos.revisa_equipo_epp;
            //Conducción
            this.uso_espejos_punto_ciego = datos.uso_espejos_punto_ciego;
            this.conduce_manos_volante = datos.conduce_manos_volante;
            this.uso_frenos = datos.uso_frenos;
            this.hace_buen_uso_marcha = datos.hace_buen_uso_marcha;
            this.uso_embrague = datos.uso_embrague;
            this.estaciona_acorde_terreno = datos.estaciona_acorde_terreno;
            //Seguridad
            this.respeta_senializacion = datos.respeta_senializacion;
            this.mira_anticipacion = datos.mira_anticipacion;
            this.controla_riesgo_ruta = datos.controla_riesgo_ruta;
            this.demuestra_conduccion_segura = datos.demuestra_conduccion_segura;
            //CONOCIMIENTO OPERACIONAL GENERAL 
            this.traccion_4h4l = datos.traccion_4h4l;
            this.opera_sistema_radial = datos.opera_sistema_radial;
            this.domina_porc_cadena = datos.domina_porc_cadena;
            this.entiende_operacion_vehiculo = datos.entiende_operacion_vehiculo;
             //Actitud y Experiencia
            this.refleja_experiencia = datos.refleja_experiencia;
            this.actitud_evaluacion = datos.actitud_evaluacion;
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
        this.rut_instructor =this.rut_instructor;
        //this.turno_instructor = this.turno_instructor;
        this.Instructor = this.Instructor;
        this.fecha = this.fecha;
        this.estado = this.estado;
        this.licencias = this.licencias;
        this.Observacion = this.Observacion;
        //pre operacional
        this.chequeo_pre_operacion = this.chequeo_pre_operacion;
        this.interior_cabina_pickup = this.interior_cabina_pickup;
        this.revisa_vehiculo_antes = this.revisa_vehiculo_antes;
        this.revisa_equipo_epp = this.revisa_equipo_epp;
        //Conducción
        this.uso_espejos_punto_ciego = this.uso_espejos_punto_ciego;
        this.conduce_manos_volante = this.conduce_manos_volante;
        this.uso_frenos = this.uso_frenos;
        this.hace_buen_uso_marcha = this.hace_buen_uso_marcha;
        this.uso_embrague = this.uso_embrague;
        this.estaciona_acorde_terreno = this.estaciona_acorde_terreno;
        //Seguridad
        this.respeta_senializacion = this.respeta_senializacion;
        this.mira_anticipacion = this.mira_anticipacion;
        this.controla_riesgo_ruta = this.controla_riesgo_ruta;
        this.demuestra_conduccion_segura = this.demuestra_conduccion_segura;
        //CONOCIMIENTO OPERACIONAL GENERAL 
        this.traccion_4h4l = this.traccion_4h4l;
        this.opera_sistema_radial = this.opera_sistema_radial;
        this.domina_porc_cadena = this.domina_porc_cadena;
        this.entiende_operacion_vehiculo = this.entiende_operacion_vehiculo;
         //Actitud y Experiencia
        this.refleja_experiencia = this.refleja_experiencia;
        this.actitud_evaluacion = this.actitud_evaluacion;


            
    }
}