import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';// para guadar en storage
import { element } from 'protractor';
import {Todo_dato} from '../models/Todo_dato';
import {AlertController} from '@ionic/angular';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  rut:string;
  rutins:string;
  namesinst:string;
  item_editar: Todo_dato = new Todo_dato();
  isDisabled: boolean = false;
  ver_disabled: number = 0;
  cadena : boolean = false;
  //Rubens Button
  disableLlenar:boolean = false;
  constructor(private activatedRoute: ActivatedRoute,
              private storage: Storage, 
              private router: Router,
              private cdr: ChangeDetectorRef,
              public alertController: AlertController

              ) { }

  ngOnInit() {
    
    this.rut= this.activatedRoute.snapshot.paramMap.get('rut');
    this.rutins= this.activatedRoute.snapshot.paramMap.get('rutins');
    this.namesinst= this.activatedRoute.snapshot.paramMap.get('namesinst');
    console.log("Este es el rut"+ this.rut)
    this.storage.get('persona').then((data)=>{
      let check = data.find(element => element.rut == this.rut);

      this.item_editar=check;
      console.log(this.item_editar);

    });
  }
  guardar(){
    
    this.storage.get('persona').then((data)=>{
      let midata = data;
      //console.log(midata);
      //this.storage.clear();

      let checkStg = midata.find(element => element.rut == this.rut);
      checkStg.rut = this.item_editar.rut;
      checkStg.nombre = this.item_editar.nombre;
      checkStg.cargo = this.item_editar.cargo;
      checkStg.empresa = this.item_editar.empresa;
      checkStg.faena = this.item_editar.faena;
      checkStg.licencias = this.item_editar.licencias;
      checkStg.Vehiculo  = this.item_editar.Vehiculo;
      checkStg.marca = this.item_editar.marca;
      checkStg.modelo = this.item_editar.modelo;
      checkStg.tipo_caja_cambio = this.item_editar.tipo_caja_cambio;
      checkStg.tipo_rampla = this.item_editar.tipo_rampla;
      checkStg.Observacion = this.item_editar.Observacion;
      //pre operacional
      checkStg.chequeo_pre_operacion = this.item_editar.chequeo_pre_operacion;
      checkStg.interior_cabina_pickup = this.item_editar.interior_cabina_pickup;
      checkStg.revisa_vehiculo_antes = this.item_editar.revisa_vehiculo_antes;
      checkStg.revisa_equipo_epp = this.item_editar.revisa_equipo_epp;
      //Conducción
      checkStg.uso_espejos_punto_ciego = this.item_editar.uso_espejos_punto_ciego;
      checkStg.conduce_manos_volante = this.item_editar.conduce_manos_volante;
      checkStg.uso_frenos = this.item_editar.uso_frenos;
      checkStg.hace_buen_uso_marcha = this.item_editar.hace_buen_uso_marcha;
      checkStg.uso_embrague = this.item_editar.uso_embrague;
      checkStg.estaciona_acorde_terreno = this.item_editar.estaciona_acorde_terreno;
      //Seguridad
      checkStg.respeta_senializacion = this.item_editar.respeta_senializacion;
      checkStg.mira_anticipacion = this.item_editar.mira_anticipacion;
      checkStg.controla_riesgo_ruta = this.item_editar.controla_riesgo_ruta;
      checkStg.demuestra_conduccion_segura = this.item_editar.demuestra_conduccion_segura;
      //Conocimiento operacional genereal
      checkStg.traccion_4h4l =  this.item_editar.traccion_4h4l;
      checkStg.opera_sistema_radial = this.item_editar.opera_sistema_radial;
      console.log(this.item_editar.domina_porc_cadena);
      checkStg.domina_porc_cadena =  this.item_editar.domina_porc_cadena;
      checkStg.entiende_operacion_vehiculo =  this.item_editar.entiende_operacion_vehiculo;
      //Actitud y experiencia
      checkStg.refleja_experiencia =  this.item_editar.refleja_experiencia;
      checkStg.actitud_evaluacion =  this. item_editar.actitud_evaluacion;
      //midata[checkStg]= this.item_editar;
      //checkStg = this.item_editar;
      const regex = new RegExp(/^\d{1,2}\d{3}\d{3}[0-9kK]{1}$/);
      if(regex.test(this.item_editar.rut)){
        this.storage.set('persona',midata);
        console.log(midata);
        this.disableLlenar = false;
        this.Alertaseditado();
      }else{
        this.Alertasrut();
      }
    });
  }


  //Los check para habilitar
  checkValue(event){ 
    //console.log(event.detail.value)
    var faenas = event.detail.value;
    var entro = 0;
    
    if(Array.isArray(faenas)){
      faenas.forEach(element => {
        console.log(element)
        if(element == "LOS BRONCES" || element == "COACH MINA"  || element == "MINERODUCTOS" || element == "MINA"){
          this.isDisabled=false;
          this.ver_disabled =0;
          entro= 1;
          this.cadena = false;

  
        }
        if(entro!=1){
          this.isDisabled=true;
          this.ver_disabled =1;
          this.cadena = true;
        }
      });
    }else{
      if(faenas == "LOS BRONCES" || faenas == "COACH MINA" || faenas == "MINERODUCTOS" || faenas == "MINA"){
          this.isDisabled=false;
          this.ver_disabled =0;
          entro= 1;
          this.cadena = false;

      }
      if(entro!=1){
        this.isDisabled=true;
          this.cadena = true;
          this.ver_disabled =1;
      }
    }
    
    //console.log(faenas);
    //if(event.detail.value == "LAS TORTOLAS" || event.detail.value == "BASE COLINA"){
      //this.isDisabled=true;
      //this.ver_disabled =1;
      //this.Todo_dato.domina_porc_cadena=undefined;
    //}else{
      //this.isDisabled=false;
      //this.ver_disabled =0;

    //}
    
  }

 //Cierre El calcular notas
  //el boton llenar
  async llenar(){
    this.disableLlenar = true;
    //pre operacional
    this.item_editar.chequeo_pre_operacion="60";
    this.item_editar.interior_cabina_pickup="60";
    this.item_editar.revisa_vehiculo_antes="60";
    this.item_editar.revisa_equipo_epp="60";
    //Conducción
    this.item_editar.uso_espejos_punto_ciego="60";
    this.item_editar.conduce_manos_volante="60";
    this.item_editar.uso_frenos="60";
    this.item_editar.hace_buen_uso_marcha="60";
    this.item_editar.uso_embrague="60";
    this.item_editar.estaciona_acorde_terreno="60";
    //Seguridad
    this.item_editar.respeta_senializacion="60";
    this.item_editar.mira_anticipacion="60";
    this.item_editar.controla_riesgo_ruta="60";
    this.item_editar.demuestra_conduccion_segura="60";
    //CONOCIMIENTO OPERACIONAL GENERAL 
    this.item_editar.traccion_4h4l="60";
    this.item_editar.opera_sistema_radial="60";
    if(this.ver_disabled == 0){
      this.item_editar.domina_porc_cadena="60";
    }
    this.item_editar.entiende_operacion_vehiculo="60";
      //Actitud y Experiencia
    this.item_editar.refleja_experiencia="60";
    this.item_editar.actitud_evaluacion="60";
    
    this.cdr.detectChanges();
  }
  //Cierre el llenar


  async Alertaseditado() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class ',
      header: '',
      subHeader: 'Editado Correctamente',
      message: '',
      buttons: [{
        text:'OK',
        handler: data => {
          //this.volver();
          this.router.navigate(['/guardar',this.rutins,this.namesinst]);
          //console.log('Cancel clicked');
        } 
      }],
      backdropDismiss: false
    });
    await alert.present();
  }

  async Alertasrut() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class ',
      header: '',
      subHeader: 'Favor Verificar Formato Rut (12345678K)',
      message: '',
      buttons: [{
        text:'OK',
        handler: data => {

        } 
      }],
      backdropDismiss: false
    });
    await alert.present();
  }

}
