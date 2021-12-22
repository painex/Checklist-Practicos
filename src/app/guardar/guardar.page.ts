import { Component, OnInit } from '@angular/core';
import { CheckService } from '../services/check-services/check.service';
import {Todo_dato} from '../models/Todo_dato';
import { Todo } from '../models/todo';//modelo todo
import {Login_user} from '../models/login';
import { Storage } from '@ionic/storage';// para guadar en storage
import { Network } from '@ionic-native/network/ngx';// para ver la coneccion
import { LoadingController, ToastController, AlertController, MenuController } from '@ionic/angular';
import {Todo_dato_off} from '../models/Todo_dato_off';
import { element } from 'protractor';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { writeFile } from 'fs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Observable, fromEvent, merge, of, BehaviorSubject } from 'rxjs';




@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.page.html',
  styleUrls: ['./guardar.page.scss'],
})
export class GuardarPage implements OnInit {
  Todo_dato_off:Todo_dato_off[];
  public item : Array<any> = new Array<any>();
  public check: Array<any> = new Array<any>();
  public Jsons: Array<any> = new Array<any>();
  Todo_dato: Todo_dato = new Todo_dato();
  todo: Todo = new Todo();
  rutsinst: any;
  namesinst: any;
  cantidad:number;
  mijson:any;

  //tipo de internet
  tipoInternet: any;
  private hasConnection = new BehaviorSubject(false);

  constructor(
    private storage: Storage, 
    public menuCtrl: MenuController,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    public loadingController: LoadingController,
    private CheckService: CheckService,
    private network:Network ,
    public toastController: ToastController,
    public alertController: AlertController,
    private router: Router
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
    this.storage.get('persona').then((data)=>{
      this.item=data;
      console.log(this.item);

    });
  }
  ngOnInit() {
    this.namesinst= this.activatedRoute.snapshot.paramMap.get('namesinst').toUpperCase();
    this.rutsinst= this.activatedRoute.snapshot.paramMap.get('rutsinst').toUpperCase();
    
    this.storage.get('persona').then((data)=>{
      this.item=data;
      console.log(this.item);

    });
  }
  reload(){
    this.ngOnInit()
  }
  verificacionInternet (){
  
      //this.hasConnection.next(true);
      this.tipoInternet = this.network.type;
      if(this.network.type === 'wifi'){
        this.tipoInternet = "wifi"
      }
      if(this.network.type === '4g'){
        this.tipoInternet = "4g"
      }
    
  }
  async test() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'No funcionó internet asegúrese de tener internet',
      subHeader: 'Tener en cuenta que solo funciona con 4g o Wifi',
      message: 'Si usted tiene internet deshabilite y habilite su internet',
      buttons: ['OK']
    });
    await alert.present();
  }
  

  Editar(rut){
    console.log(rut);
    this.router.navigate(['/editar',rut,this.rutsinst,this.namesinst]);
  }

  Eliminar(id){
    console.log(id);
    //this.router.navigate(['/editar',rut,this.rutsinst,this.namesinst]);
  }
  

  async guardar(){
    if(this.item!=null){
    this.verificacionInternet()
    const loading = await this.loadingController.create({
      message:'Guardando',
    });
    if(navigator.onLine){

      if(this.tipoInternet === "wifi" || this.tipoInternet === "4g" || this.tipoInternet === "5g"){

      
        loading.present();
        this.cantidad=0;
        this.storage.get('persona').then((data)=>{
          this.item=data;
          });
          this.item.forEach(element =>{
            if(element!=null){
              this.Todo_dato= element;
              //pre operacional
              this.cantidad=this.cantidad+1;
              this.check.push({"id":1, "check":this.Todo_dato.chequeo_pre_operacion});
              this.check.push({"id":2, "check":this.Todo_dato.interior_cabina_pickup});
              this.check.push({"id":3, "check":this.Todo_dato.revisa_vehiculo_antes});
              this.check.push({"id":4, "check":this.Todo_dato.revisa_equipo_epp});
              //Conduccion
              this.check.push({"id":5, "check":this.Todo_dato.uso_espejos_punto_ciego});
              this.check.push({"id":6, "check":this.Todo_dato.conduce_manos_volante});
              this.check.push({"id":7, "check":this.Todo_dato.uso_frenos});
              this.check.push({"id":8, "check":this.Todo_dato.hace_buen_uso_marcha});
              this.check.push({"id":9, "check":this.Todo_dato.uso_embrague});
              this.check.push({"id":10, "check":this.Todo_dato.estaciona_acorde_terreno});
              //Seguridad
              this.check.push({"id":11, "check":this.Todo_dato.respeta_senializacion});
              this.check.push({"id":12, "check":this.Todo_dato.mira_anticipacion});
              this.check.push({"id":13, "check":this.Todo_dato.controla_riesgo_ruta});
              this.check.push({"id":14, "check":this.Todo_dato.demuestra_conduccion_segura});
              //Conocimiento operacional general
              this.check.push({"id":15, "check":this.Todo_dato.traccion_4h4l});
              this.check.push({"id":16, "check":this.Todo_dato.opera_sistema_radial});
              if(typeof this.Todo_dato.domina_porc_cadena  === 'undefined' || this.Todo_dato.domina_porc_cadena == undefined  )
              {
                this.Todo_dato.domina_porc_cadena = "0";
              }
              this.check.push({"id":17, "check":this.Todo_dato.domina_porc_cadena.toString()});
              this.check.push({"id":18, "check":this.Todo_dato.entiende_operacion_vehiculo});
              //Actitud y experiencia
              this.check.push({"id":19, "check":this.Todo_dato.refleja_experiencia});
              this.check.push({"id":20, "check":this.Todo_dato.actitud_evaluacion});
              this.todo.id_persona=this.Todo_dato.id_persona;
              var newrut = this.Todo_dato.rut.replace('.','');
              var newrut2 = newrut.replace('.','');
              var newrut_singuion = newrut2.replace('-','');
              var newrut_k = newrut_singuion.replace('k','K');
              this.todo.rut=newrut_k;
              this.todo.nombre=this.Todo_dato.nombre;
              this.todo.cargo=this.Todo_dato.cargo;
              this.todo.empresa=this.Todo_dato.empresa;
              this.todo.faena=this.Todo_dato.faena.toString();
              this.todo.Vehiculo=this.Todo_dato.Vehiculo;
              this.todo.marca = this.Todo_dato.marca.toUpperCase();
              this.todo.modelo = this.Todo_dato.modelo;
              this.todo.tipo_caja_cambio = this.Todo_dato.tipo_caja_cambio;
              this.todo.tipo_rampla = this.Todo_dato.tipo_rampla;
              var namei =  this.namesinst.replace('.','');
              namei= namei.replace('-','');
              this.todo.rut_instructor = namei;
              var ruti = this.rutsinst.replace('.','');
              ruti = ruti.replace('-','');
              this.todo.Instructor = ruti;
              this.todo.fecha=this.Todo_dato.fecha;
              if(this.Todo_dato.elestado == true){
                this.Todo_dato.estado = "Pendiente";
                
              }
              this.todo.estado=this.Todo_dato.estado;
              this.todo.licencias = this.Todo_dato.licencias.toString();
              if(this.Todo_dato.Observacion != undefined){
                this.todo.Observacion=this.Todo_dato.Observacion;
              }else{
                this.todo.Observacion= "SIN OBSERVACION";
              }
              
              this.todo.checks=this.check;
              this.Jsons.push(this.todo);
              
              
            
            
            this.Todo_dato = new Todo_dato(null);
            this.todo = new Todo(null);
            this.check = [];
  
            //localStorage.removeItem('persona');
            }
           
          
        });
        //convierte a json
        this.mijson=JSON.stringify(this.Jsons); 
        var eljson = JSON.parse (this.mijson);
        console.log(this.mijson);
        //Envia a Servicios 
        this.CheckService.Todo(eljson).subscribe(()=>{
          this.Jsons = [];
          this.vaciarstorage();
          this.mostrarMensajesucces(this.cantidad);
          this.reload()
          loading.dismiss();


        },
        error=>{
          this.Jsons = [];
          loading.dismiss();

          this.mostrarMensajeerror(error)
          console.log(error)
        });
        this.item =[];
      }
      else{
        this.test();
      }
    }else{
      this.mostrarMensaje();
    }}else{
      this.mostrarMensajedatos("Contador de Practicos = 0");
    }
  }


  vaciarstorage(){
    this.storage.clear();
  }
  //Alertas de si no esta conectado a la base de datos
  async mostrarMensaje() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Debe estar conectado a intenet para Guardar ',
      subHeader: '',
      message: '',
      buttons: ['OK']
    });
    await alert.present();
  }
  //Alertas de error
  async mostrarMensajeerror(error) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Problemas con guardar',
      subHeader: 'Consulte con Administrador enviando Captura',
      message: error.error.title,
      buttons: ['OK']
    });
    await alert.present();
  }
    //Alertas de no tener datos
    async mostrarMensajedatos(error) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'No hay datos para enviar a nube',
        subHeader: 'Pruebe Ingresando un Practico antes de subir a la nube',
        message: error,
        buttons: ['OK']
      });
      await alert.present();
    }
  //Alerta de guardado y cuantos
  async mostrarMensajesucces(cantidad:number) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Se guardaron '+this.cantidad+' datos exitosamente.',
      subHeader: '',
      message: '',
      buttons: ['OK']
    });
    await alert.present();
  }
  
}
