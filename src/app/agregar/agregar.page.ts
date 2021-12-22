import { Component, OnInit,ChangeDetectorRef   } from '@angular/core';
import { CheckService } from '../services/check-services/check.service';
import {Todo_dato} from '../models/Todo_dato';
import {Todo_dato_off} from '../models/Todo_dato_off';
import { Todo } from '../models/todo';//modelo todo
import {Login_user} from '../models/login';
import { items } from '../models/items';
import { LoadingController, ToastController, AlertController, MenuController,NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';// para guadar en storage
import { Network } from '@ionic-native/network/ngx';// para ver la coneccion
import { BrowserStack } from 'protractor/built/driverProviders';
import { NgModel } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Informacion } from '../models/Informacion.model';
import { element } from 'protractor';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})

export class AgregarPage implements OnInit {
  //los opened son para desplegar los item en la vista
  rutsinst: any;
  namesinst: any;
  coneccion: boolean = false;
  popopo: string = "su nota es 60";
  suma:number=0;
  cont_guardados:number=0;
  cont:number=0;
  resultado:string="";
  total:number=0;
  ruts_offline:string="";
  verconeccion:string="";
  oportunidad:number=0;
  ver_disabled:number = 0;
  estado_oportunidad:string;
  observacion_oportunidad:string;
  faena_oportunidad:string;
  isDisabled: boolean=false;
  rutd: Array<any>;
  rut_informacion: any;
  vehicles=[
    {id:1,name:'AMBULANCIA', value:'AMBULANCIA'},
    {id:2,name:'UNIDAD DE RESCATE', value:'UNIDAD DE RESCATE'},
    {id:3,name:'CAMIONETA 4X2', value:'CAMIONETA 4X2'},
    {id:4,name:'CAMIONETA 4X4', value:'CAMIONETA 4X4'},
    {id:5,name:'VAN MINIBUS TAXI 4X2', value:'VAN MINIBUS TAXI 4X2'},
    {id:6,name:'MINIBUS 4X4', value:'MINIBUS 4X4'},
    {id:7,name:'VAN 4X4', value:'VAN 4X4'},
    {id:8,name:'BUS 4X2 4X4 6X2', value:'BUS 4X2 4X4 6X2'},
    {id:9,name:'BUS DOS PISOS 6X2 RDS', value:'BUS DOS PISOS 6X2 RDS'},
    {id:10,name:'CAMION ¾', value:'CAMION ¾'},
    {id:11,name:'CAMION PLANO 4X2 4X4', value:'CAMION PLANO 4X2 4X4'},
    {id:12,name:'CAMION PLUMA', value:'CAMION PLUMA'},
    {id:13,name:'CAMION ALJIBE', value:'CAMION ALJIBE'},
    {id:14,name:'CAMION TOLVA', value:'CAMION TOLVA'},
    {id:15,name:'CAMION COMBUSTIBLE 5 – 10 – 15 – M3', value:'CAMION COMBUSTIBLE 5 – 10 – 15 – M3'},
    {id:16,name:'CAMION MIXER', value:'CAMION MIXER'},
    {id:17,name:'CAMION RESIDUOS', value:'CAMION RESIDUOS'},
    {id:18,name:'CAMION AMPLIROLL', value:'CAMION AMPLIROLL'},
    {id:19,name:'TRACTO CAMION RAMPLA PLANA CARGA SECA', value:'TRACTO CAMION RAMPLA PLANA CARGA SECA'},
    {id:20,name:'TRACTO CAMION PLUMA', value:'TRACTO CAMION PLUMA'},
    {id:21,name:'TRACTO CAMION BATEA', value:'TRACTO CAMION BATEA'},
    {id:22,name:'TRACTO CAMION CISTERNA', value:'TRACTO CAMION CISTERNA'},
    {id:23,name:'TRACTO CAMION CAMA BAJA', value:'TRACTO CAMION CAMA BAJA'},
    {id:24,name:'OTRO', value:'OTRO'},
  ];

  brands=[ {id:1, name:'CHEVROLET',value:'CHEVROLET'},
  {id:2, name:'MITSUBISHI',value:'MITSUBISHI'},
  {id:3, name:'TOYOTA',value:'TOYOTA'},
  {id:4, name:'NISSAN',value:'NISSAN'},
  {id:5, name:'VOLKSWAGEN',value:'VOLKSWAGEN'},
  {id:6, name:'MAXUS',value:'MAXUS'},
  {id:7, name:'MAZDA',value:'MAZDA'},
  {id:8, name:'FIAT',value:'FIAT'},
  {id:9, name:'FORD',value:'FORD'},
  {id:10, name:'DODGE',value:'DODGE'},
  {id:11, name:'HONDA',value:'HONDA'},
  {id:12, name:'GREAT WALL',value:'GREAT WALL'},
  {id:13, name:'MAHINDRA',value:'MAHINDRA'},
  {id:14, name:'SSANGYONG',value:'SSANGYONG'},
  {id:15, name:'MERCEDES BENZ',value:'MERCEDES BENZ'},
  {id:16, name:'VOLVO',value:'VOLVO'},
  {id:17, name:'INTERNACIONAL',value:'INTERNACIONAL'},
  {id:18, name:'FREIGHTLINER',value:'FREIGHTLINER'},
  {id:19, name:'SCANIA',value:'SCANIA'},
  {id:20, name:'IVECO',value:'IVECO'},
  {id:21, name:'MAN',value:'MAN'},
  {id:22, name:'MACK',value:'MACK'},
  {id:23, name:'OTRO',value:'OTRO'}];

  vehicle:any;

  //Rubens Button
  disableLlenar:boolean = false;

  disableBloqueo:boolean = false;

  //generan variables de los modelos
  Todo_dato: Todo_dato = new Todo_dato();
  Todo_dato_off: Todo_dato_off = new Todo_dato_off();
  todo: Todo = new Todo();
  informacion: Informacion[];
  //public informacion: Array<any> = new Array<any>();
  public items_off: Array<any> = new Array<any>();
  public items_off2: Array<any> = new Array<any>();

  //nuevos cambios
  otro_vehiculo:any;
  marca:any;
  rampla:any;
  inasistencia: any;
  cadena : boolean = false;

  public items: Array<any> = new Array<any>();
  constructor(private CheckService: CheckService, 
              public loadingController: LoadingController,
              public toastController: ToastController,
              private storage: Storage, 
              private network:Network ,
              public alertController: AlertController,
              public menuCtrl: MenuController,
              private activatedRoute: ActivatedRoute,
              private cdr: ChangeDetectorRef,
              private navCtrl: NavController,
              private router: Router
              
              ) 
        {
           // cosas dentro del constructor
        }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
    this.isDisabled=true;
  }
  // on init
  ngOnInit() {
    this.namesinst= this.activatedRoute.snapshot.paramMap.get('nombre');
    this.rutsinst= this.activatedRoute.snapshot.paramMap.get('rut');
    this.isDisabled=true;
    

  }
  reload(){
    this.ngOnInit()
  }
  //el boton mostrar para ir a otro page
  mostrar(){
    this.router.navigate(['/guardar',this.rutsinst,this.namesinst]);
  }
  //cierre boton mostrar para ir a otro page

  //el presentlading
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando',
      duration: 5000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  //Cierre el presentlading
  
  grabar_localstorage(){
    let persona = {
      
    }  
  }

  //variable
  public check: Array<any> = new Array<any>();
  //Cierre variable

  async buscar(){
    
    const loading = await this.loadingController.create({
      message:'Cargando',
      
    });
    await loading.present();
    var newrut = this.Todo_dato.rut.replace('.','');
    var newrut2 = newrut.replace('.','');
    var newrut_singuion = newrut2.replace('-','');
    var newrut_k = newrut_singuion.replace('k','K');
    var cont =0;
    this.rut_informacion = newrut_k;
    this.CheckService.verInformacion(this.rut_informacion).subscribe((informacion)=>{
      if(Object.keys(informacion).length === 0){
        //console.log(informacion);
        //console.log(Object.keys(informacion).length === 0);
        this.mostrarMensajesinregistro();
        loading.dismiss();
      }else{
        console.log(informacion);
        if(informacion.practics[0]!=null){
          this.Todo_dato.nombre = informacion.practics[0].nombre;
          this.Todo_dato.cargo = informacion.practics[0].cargo;
          this.Todo_dato.empresa = informacion.practics[0].empresa;
        }
       
        let defensiveDriving = "Reprobado";
        let reglamentTest = "Reprobado";
        if(informacion.defensiveDriving == "True"){
          defensiveDriving = "Aprobado";
        }
        if(informacion.reglamentTest == "True"){
          reglamentTest = "Aprobado";
        }
        
        informacion.practics.forEach(element =>{
          cont=cont+1;
          this.oportunidad = cont;
          this.estado_oportunidad=element.estado;
          this.observacion_oportunidad= element.observacion;
          this.faena_oportunidad = element.faena;
          this.mostrarMensajesucces(this.oportunidad,this.estado_oportunidad,this.observacion_oportunidad, this.faena_oportunidad);
        });
        this.mostrarMensajePruebas(defensiveDriving,reglamentTest,informacion.practics.length);
        loading.dismiss();
      }
    },(errorObtenido)=>{
      this.mensajeerror();
      loading.dismiss();
      console.log(errorObtenido);
    });
    

  }
  
  async mostrarMensajesucces(oportunidad:number,estado_oportunidad:string,observacion_oportunidad:string, faena_oportunidad:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Oportunidad numero '+this.oportunidad+'',
      subHeader: ''+this.estado_oportunidad + ' - ' + this.faena_oportunidad,
      message: 'Observación: '+this.observacion_oportunidad,
      buttons: ['OK']
    });
    await alert.present();
  }

  async mostrarMensajePruebas(defensiveDriving:string, reglamentTest: string, practics: number) {
    const alert = await this.alertController.create({
      header: 'Resultados Pruebas',
      message: '<p style="color:blue">Resultado Manejo Defensivo: <b>' + defensiveDriving +'</b></p> <p>Resultado Reglamento: <b>'+reglamentTest + '</b></p><p>Intentos Practicos: <b>'+practics+'</b></p>',
      buttons: ['OK']
    });
    await alert.present();
  }


  async mostrarMensajesinregistro() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'No tiene registros en prácticos',
      subHeader: '',
      message: '',
      buttons: ['OK']
    });
    await alert.present();
  }
  async mensajeerror() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'No se pudo obtener información de la base de datos',
      subHeader: '',
      message: '',
      buttons: ['OK']
    });
    await alert.present();
  }
  //al pinchar el boton guardar 
  async guardar()
  {
    this.calcular();
    //this.storage.clear();
    //muestra loading
    const regex = new RegExp(/^\d{1,2}\d{3}\d{3}[0-9kK]{1}$/);
    const loading = await this.loadingController.create({
      message:'Guardando',
      
    });
    //inicia el loading
    await loading.present();
  if(regex.test(this.Todo_dato.rut) == true){
    if(this.Todo_dato.rut != undefined)
    {     
      if(this.Todo_dato.nombre != undefined)
      {
        if(this.Todo_dato.fecha != undefined)
        {
          if(this.Todo_dato.cargo != undefined)
          {  
            if(this.Todo_dato.empresa != undefined)  
            {
              if(this.Todo_dato.faena != undefined)
              {
                if(this.Todo_dato.modelo != undefined)
                {
                  if(this.Todo_dato.licencias != undefined)
                  {
                    if(this.otro_vehiculo != undefined){
                      this.Todo_dato.Vehiculo = this.otro_vehiculo;
                    }
                    if(this.marca != undefined){
                      this.Todo_dato.marca = this.marca;
                    }
                    if(this.rampla != undefined){
                      this.Todo_dato.tipo_rampla = this.rampla;
                    }
                    loading.dismiss();
                    this.presentAlertPre();
                  
                  }else{
                    loading.dismiss();
                    this.disableBloqueo = false;
                    this.mostrarMensaje("La licencias es obligatorio");

                  }
                }else{
                  loading.dismiss();
                  this.disableBloqueo = false;
                  this.mostrarMensaje("El modelo es obligatorio");
                }
              }else{
                loading.dismiss();
                this.disableBloqueo = false;
                this.mostrarMensaje("La faena es obligatoria");
              }
            }else{
              loading.dismiss();
              this.mostrarMensaje("La empresa es obligatoria");
            }          
          }else{
            loading.dismiss();
            this.disableBloqueo = false;
            this.mostrarMensaje("El cargo es obligatorio");
          }
        }else{
          loading.dismiss();
          this.disableBloqueo = false;
          this.mostrarMensaje("La fecha es obligatoria");
        }
      }else{
        loading.dismiss();
        this.disableBloqueo = false;
        this.mostrarMensaje("El nombre es obligatorio");
      }      
    }else{
        loading.dismiss();
        this.disableBloqueo = false;
        this.mostrarMensaje("El rut es obligatorio");
    }
    }else{
      loading.dismiss();
      this.disableBloqueo = false;
      this.mostrarMensaje("Rut debe ser valido (12345678K)");
      window.location.reload();
    }
    //segun como este el euqipo conectado o no conectado a la red 
  }
  //Cierre al pinchar boton Guardar

  //muetra alertas
  async mostrarMensaje(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration:2000
    });
    toast.present();
  }
  //Cierra la muestra de alertas
  //otra alerta
  async mostrarMensaje2(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration:1000000
    });
    toast.present();
  }
  //Cierra otra alerta
  //otra alerta
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Resultado',
      subHeader: ''+this.total,
      message: ''+this.resultado,
      buttons: ['OK']
    });
    await alert.present();
  }
  //Cierre otra alerta
  //otra Alerta
  async presentAlertoff() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Resultado guardado Offline',
      subHeader: ''+this.total,
      message: ''+this.resultado,
      buttons: [{
        text:'OK',
        handler: ()=>{
          window.location.reload();
        }
    
    }]
    });
    //window.location.reload();
    await alert.present();
  }
//Alerta Comprobar Guardado
async presentAlertPre() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: '¿Está seguro de lo que va a almacenar?',
    subHeader: 'Vehiculo: '+this.Todo_dato.Vehiculo,
    message: 'Resultado: '+this.resultado,
    buttons: [{text:'Cancelar'},{
      
      text:'Aceptar',
      handler: ()=>{
        //guarda en storage
        this.storage.get('persona').then((data)=>{
                      
          if(data!=null){
            
            //console.log(data);
            this.items=data;
            if(this.cadena == true){
              this.Todo_dato.domina_porc_cadena = "0";
            }
            if(this.Todo_dato!=null){
            this.items.push(this.Todo_dato);
            }
            this.storage.set('persona', this.items);
            //this.mostrarMensaje("pase por aca")
            console.log(this.items);
            //localStorage.setItem("ruts",this.items);
            //localStorage.setItem("persona", JSON.stringify(this.AgregaInformacionPersonal));
            //this.Todo_dato = new Todo_dato(null)
            //this.reload();
            
            this.presentAlertoff();
           
            //this.llenar();
          }else{
            this.items = new Array<any>();
            if(this.Todo_dato!=null){
              this.items.push(this.Todo_dato);
            }
            this.storage.set('persona', this.items);
            //this.mostrarMensaje("pase por aca")
            console.log(this.items);
            //localStorage.setItem("ruts",this.items);
            //localStorage.setItem("persona", JSON.stringify(this.AgregaInformacionPersonal));
            //this.Todo_dato = new Todo_dato(null)
            //this.presentAlert();
            //this.reload();
            //this.presentAlertoff();
            this.presentAlertoff();
            //this.presentAlertPre();
            //this.mostrarMensaje("Guardado OffLine")
            //this.llenar();
          }
        });
        //cierre guardado en storage
      }
  
  }]
  });
  //window.location.reload();
  await alert.present();
}

  //cierra otra alerta
  //Otra alerta
  async presentAlerto_guardados(mensaje: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Guardando en base de datos ',
      subHeader: 'Rut:'+mensaje,
      message: '',
      buttons: ['OK']
    });
    await alert.present();
  }
  //Cierre otra alerta
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
  //Cierre deshabilitar
  //opcion otro vehiculo colocar detalle
  change_vehiculo(event){
    this.Todo_dato.Vehiculo = event.value.value;
    if(event.value.value=="OTRO"){
      console.log("entro");

      this.detalle_vehiculo();
    }
  }
  async detalle_vehiculo() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Tipo de Vehículo',
      subHeader: '',
      message: '',
      inputs:[
        {
          name:'tipovehiculo',
          id:'tipovehiculo',
          placeholder:'CAMIONETA 4x4',
          
        }
      ],
      buttons: [{
        text:'OK',
        handler: data => {
          //this.volver();
          //console.log('Cancel clicked');
            console.log(this.otro_vehiculo);
            this.otro_vehiculo = data.tipovehiculo;
        }
      }],
      backdropDismiss: false  
    });

    await alert.present();
  }
  //Termino de opcion otro vehiculo colocar detalle 
  //opcion otro marca colocar detalle
  change_marca(event){
    this.Todo_dato.marca = event.value.value;
    if(event.value.value=="OTRO"){
      this.detalle_marca();
    }
  }
  async detalle_marca() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Marca',
      subHeader: '',
      message: '',
      inputs:[
        {
          name:'marca',
          id:'marca',
          placeholder:'NISSAN'
        }
      ],
      buttons: [{
        text:'OK',
        handler: data => {
          //this.volver();
          //console.log('Cancel clicked');
            this.marca = data.marca;
            console.log(this.marca);

        }
      }],
      backdropDismiss: false  
    });

    await alert.present();
  }
  //termino el change otro marca
  //
  change_rampla(event){
    if(event.detail.value=="OTRO"){
      this.detalle_rampla();
    }
  }
  async detalle_rampla() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Tipo de Rampla',
      subHeader: '',
      message: '',
      inputs:[
        {
          name:'rampla',
          id:'rampla',
          placeholder:''
        }
      ],
      buttons: [{
        text:'OK',
        handler: data => {
          //this.volver();
          //console.log('Cancel clicked');
            this.rampla = data.rampla;
            console.log(this.rampla);

        }
      }],
      backdropDismiss: false  
    });

    await alert.present();
  }
  //termino change de rampla
  

  //Calculas los checks
  async calcular(){
    this.suma=0;
    this.cont=0;
    console.log(this.rutsinst);
    //pre operacional
    if(this.Todo_dato.chequeo_pre_operacion != undefined){
      this.suma=this.suma + Number.parseInt(this.Todo_dato.chequeo_pre_operacion+"");
      this.cont++;
    }
    if(this.Todo_dato.interior_cabina_pickup != undefined){
      this.suma=this.suma + Number.parseInt(this.Todo_dato.interior_cabina_pickup+"");
      this.cont++;
    }
    if(this.Todo_dato.revisa_vehiculo_antes != undefined){
      this.suma=this.suma + Number.parseInt(this.Todo_dato.revisa_vehiculo_antes+"");
      this.cont++;
    }
    if(this.Todo_dato.revisa_equipo_epp != undefined){
      this.suma=this.suma + Number.parseInt(this.Todo_dato.revisa_equipo_epp+"");
      this.cont++;
    }
    //conduccción
    if(this.Todo_dato.uso_espejos_punto_ciego != undefined){
      this.suma=this.suma + Number.parseInt(this.Todo_dato.uso_espejos_punto_ciego+"");
      this.cont++;
    }
    if(this.Todo_dato.conduce_manos_volante != undefined){
      this.suma=this.suma + Number.parseInt(this.Todo_dato.conduce_manos_volante+"");
      this.cont++;
    }
    if(this.Todo_dato.uso_frenos != undefined){
      this.suma=this.suma + Number.parseInt(this.Todo_dato.uso_frenos+"");
      this.cont++;
    }
    if(this.Todo_dato.hace_buen_uso_marcha != undefined){
      this.suma=this.suma + Number.parseInt(this.Todo_dato.hace_buen_uso_marcha+"");
      this.cont++;
    }
    if(this.Todo_dato.uso_embrague != undefined){
      this.suma=this.suma + Number.parseInt(this.Todo_dato.uso_embrague+"");
      this.cont++;
    }
    if(this.Todo_dato.estaciona_acorde_terreno != undefined){
      this.suma=this.suma + Number.parseInt(this.Todo_dato.estaciona_acorde_terreno+"");
      this.cont++;
    }
    //Seguridad
    if(this.Todo_dato.respeta_senializacion != undefined){
      this.suma=this.suma + Number.parseInt(this.Todo_dato.respeta_senializacion+"");
      this.cont++;
    }
    if(this.Todo_dato.mira_anticipacion != undefined){
      this.suma=this.suma + Number.parseInt(this.Todo_dato.mira_anticipacion+"");
      this.cont++;
    }
    if(this.Todo_dato.controla_riesgo_ruta != undefined){
      this.suma=this.suma + Number.parseInt(this.Todo_dato.controla_riesgo_ruta+"");
      this.cont++;
    }
    if(this.Todo_dato.demuestra_conduccion_segura != undefined){
      this.suma=this.suma + Number.parseInt(this.Todo_dato.demuestra_conduccion_segura+"");
      this.cont++;
    }
    //CONOCIMIENTO OPERACIONAL GENERAL 
    if(this.Todo_dato.traccion_4h4l != undefined){
      this.suma=this.suma + Number.parseInt(this.Todo_dato.traccion_4h4l+"");
      this.cont++;
    }
    if(this.Todo_dato.opera_sistema_radial != undefined){
      this.suma=this.suma + Number.parseInt(this.Todo_dato.opera_sistema_radial+"");
      this.cont++;
    }
    if(this.Todo_dato.domina_porc_cadena != undefined && this.isDisabled  != true){
      this.suma=this.suma + Number.parseInt(this.Todo_dato.domina_porc_cadena+"");
      this.cont++;
    }
    if(this.Todo_dato.entiende_operacion_vehiculo != undefined ){
      this.suma=this.suma + Number.parseInt(this.Todo_dato.entiende_operacion_vehiculo+"");
      this.cont++;
    }
    //Actitud y Experiencia
    if(this.Todo_dato.refleja_experiencia != undefined ){
      this.suma=this.suma + Number.parseInt(this.Todo_dato.refleja_experiencia+"");
      this.cont++;
    }
    if(this.Todo_dato.actitud_evaluacion != undefined ){
      this.suma=this.suma + Number.parseInt(this.Todo_dato.actitud_evaluacion+"");
      this.cont++;
    }
    console.log(this.cont);
    console.log(this.suma);
    this.total=this.suma/this.cont;
    this.total = Number.parseInt(this.total+"");
    this.Todo_dato.nota=this.total;
    if(this.total >=60 ){
      this.resultado= "Aprobado";
    }else{
      this.resultado= "Reprobado";
    }
    if(this.total <=20 && this.disableBloqueo == true ){
      this.resultado= "Inasistente";
    }

  }
  //Cierre El calcular notas
  //el boton llenar
  async llenar(){
    this.disableLlenar = true;
    this.disableBloqueo = true;
    //pre operacional
    this.Todo_dato.chequeo_pre_operacion="60";
    this.Todo_dato.interior_cabina_pickup="60";
    this.Todo_dato.revisa_vehiculo_antes="60";
    this.Todo_dato.revisa_equipo_epp="60";
    //Conducción
    this.Todo_dato.uso_espejos_punto_ciego="60";
    this.Todo_dato.conduce_manos_volante="60";
    this.Todo_dato.uso_frenos="60";
    this.Todo_dato.hace_buen_uso_marcha="60";
    this.Todo_dato.uso_embrague="60";
    this.Todo_dato.estaciona_acorde_terreno="60";
    //Seguridad
    this.Todo_dato.respeta_senializacion="60";
    this.Todo_dato.mira_anticipacion="60";
    this.Todo_dato.controla_riesgo_ruta="60";
    this.Todo_dato.demuestra_conduccion_segura="60";
    //CONOCIMIENTO OPERACIONAL GENERAL 
    this.Todo_dato.traccion_4h4l="60";
    this.Todo_dato.opera_sistema_radial="60";
    if(this.ver_disabled == 0){
      this.Todo_dato.domina_porc_cadena="60";
    }
    this.Todo_dato.entiende_operacion_vehiculo="60";
      //Actitud y Experiencia
    this.Todo_dato.refleja_experiencia="60";
    this.Todo_dato.actitud_evaluacion="60";
    this.cdr.detectChanges();
  }
  //Cierre el llenar

  changeObservation(){
    if(this.Todo_dato.Observacion ==""){
      this.detalle_observacion();
    }
  }
  async detalle_observacion() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Observación Inasistencia',
      subHeader: '',
      message: '',
      inputs:[
        {
          name:'inasistencia',
          id:'inasistencia',
          placeholder:''
        }
      ],
      buttons: [{
        text:'OK',
        handler: data => {
          //this.volver();
          //console.log('Cancel clicked');
          this.Todo_dato.Observacion = data.inasistencia;
          
            this.cdr.detectChanges();
            this.guardar();
        }
      },
      {
        text:'Cancelar',
        handler: data => {
          this.disableBloqueo = false;
          window.location.reload();
        }
      }
    ],
      backdropDismiss: false  
    });

    await alert.present();
  }
  //termino change de rampla


  //el boton bloquear
  async bloquear(){

    
    this.disableBloqueo = true;
    this.disableLlenar = true;
    //pre operacional
    this.Todo_dato.chequeo_pre_operacion="10";
    this.Todo_dato.interior_cabina_pickup="10";
    this.Todo_dato.revisa_vehiculo_antes="10";
    this.Todo_dato.revisa_equipo_epp="10";
    //Conducción
    this.Todo_dato.uso_espejos_punto_ciego="10";
    this.Todo_dato.conduce_manos_volante="10";
    this.Todo_dato.uso_frenos="10";
    this.Todo_dato.hace_buen_uso_marcha="10";
    this.Todo_dato.uso_embrague="10";
    this.Todo_dato.estaciona_acorde_terreno="10";
    //Seguridad
    this.Todo_dato.respeta_senializacion="10";
    this.Todo_dato.mira_anticipacion="10";
    this.Todo_dato.controla_riesgo_ruta="10";
    this.Todo_dato.demuestra_conduccion_segura="10";
    //CONOCIMIENTO OPERACIONAL GENERAL 
    this.Todo_dato.traccion_4h4l="10";
    this.Todo_dato.opera_sistema_radial="10";
    if(this.ver_disabled == 0){
      this.Todo_dato.domina_porc_cadena="10";
    }
    this.Todo_dato.entiende_operacion_vehiculo="10";
      //Actitud y Experiencia
    this.Todo_dato.refleja_experiencia="10";
    this.Todo_dato.actitud_evaluacion="10";
    
    this.Todo_dato.Vehiculo = "N/A";
    this.Todo_dato.marca = "N/A";
    this.Todo_dato.modelo = "N/A";
    this.Todo_dato.tipo_caja_cambio = "N/A";
    this.Todo_dato.tipo_rampla = "N/A";
    this.Todo_dato.Observacion = "";
    this.Todo_dato.estado = "INASISTENTE";
    this.changeObservation();
    
  }
  //Cierre el bloquear

}
