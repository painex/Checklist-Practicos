import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Platform, NavController } from '@ionic/angular';
import {  MenuController, AlertController } from '@ionic/angular';
import { Router } from "@angular/router";
import {Login_user} from '../models/login';
import { Storage } from '@ionic/storage';// para guadar en storage
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  inst1: string ="aldo";
  pass1: string ="3366";

  inst2: string ="horacio";
  pass2: string ="3399";
  
  inst3: string ="jorge";
  pass3: string ="4488";
  
  inst5: string = "mauricio";
  pass5: string = "5566";

  inst4: string = "rubens";
  pass4: string = "1199";

  inst6: string = "ariel";
  pass6: string = "4466";

  inst7: string = "eduardo";
  pass7: string = "1234";

  inst8: string = "nelson";
  pass8: string = "3377";
  
  inst9: string = "daniel";
  pass9: string = "7744";

  inst12: string = "nicolas";
  pass12: string = "8349";

  inst13: string = "felipe";
  pass13: string = "9405";

  inst14: string = "christian";
  pass14: string = "4065";

  inst15: string = "ariel2";
  pass15: string = "2422";

  inst16: string = "ivan";
  pass16: string = "7147";

  instGenerico :string = "explork";
  passGenerico : string= "123456"
  nombre:string ="";
  coneccion: boolean = false;
  rut:string="";
  login: Login_user = new Login_user();
  constructor(public menuCtrl: MenuController,private router: Router, public alertController: AlertController,private storage: Storage) { }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }
  ngOnInit() {
    
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Verificación',
      subHeader: 'Usuario y/o contraseña son incorrectas',
      message: 'Vuelva a intertarlo',
      buttons: ['OK']
    });

    await alert.present();
  }
  async Autenticar(){

    if(this.login.user.toUpperCase() == this.inst1.toUpperCase()){
      if(this.login.pass == this.pass1){
        this.nombre="ALDO RODRIGUEZ";
        this.rut="158917513";
        this.router.navigate(['/agregar',this.nombre,this.rut]);
        

      }else{
        this.presentAlert();
        this.login.user=null;
        this.login.pass=null;
      }
    }
    else if(this.login.user.toUpperCase() == this.instGenerico.toUpperCase()){
      if(this.login.pass == this.passGenerico){
        this.instrGenerico();
      }else{
        this.presentAlert();
        this.login.user=null;
        this.login.pass=null;
      }
    }
    else if(this.login.user.toUpperCase() == this.inst2.toUpperCase()){
      if(this.login.pass == this.pass2){
        this.nombre="HORACIO CHEREAU";
        this.rut="78112638";
        this.router.navigate(['/agregar',this.nombre,this.rut]);
      }else{
        this.presentAlert();
        this.login.user=null;
        this.login.pass=null;
      }
    }
    else if(this.login.user.toUpperCase() == this.inst5.toUpperCase()){
      if(this.login.pass == this.pass5){
        this.nombre="MAURICIO CASTRO";
        this.rut="122709833";
        this.router.navigate(['/agregar',this.nombre,this.rut]);
      }else{
        this.presentAlert();
        this.login.user=null;
        this.login.pass=null;
      }
    }
    else if(this.login.user.toUpperCase() == this.inst6.toUpperCase()){
      if(this.login.pass == this.pass6){
        this.nombre="ARIEL ENCINA";
        this.rut="136821601";
        this.router.navigate(['/agregar',this.nombre,this.rut]);
      }else{
        this.presentAlert();
        this.login.user=null;
        this.login.pass=null;
      }
    }else if(this.login.user.toUpperCase() == this.inst4.toUpperCase()){
      if(this.login.pass == this.pass4){
        this.nombre="RUBENS GOMEZ";
        this.rut="273915648";
        this.router.navigate(['/agregar',this.nombre,this.rut]);
      }else{
        this.presentAlert();
        this.login.user=null;
        this.login.pass=null;
      }
    }
    else if(this.login.user.toUpperCase() == this.inst3.toUpperCase()){
      if(this.login.pass == this.pass3){
        this.nombre="JORGE ITURRIETA";
        this.rut="130734146";
        this.router.navigate(['/agregar',this.nombre,this.rut]);
         
      }else{
        this.presentAlert();
        this.login.user=null;
        this.login.pass=null;
      }
    }else if(this.login.user.toUpperCase() == this.inst7.toUpperCase()){
      if(this.login.pass == this.pass7){
        this.nombre="EDUARDO RODRIGUEZ";
        this.rut="92196194";
        this.router.navigate(['/agregar',this.nombre,this.rut]);
         
      }else{
        this.presentAlert();
        this.login.user=null;
        this.login.pass=null;
      }
    } else if(this.login.user.toUpperCase() == this.inst8.toUpperCase()){
      if(this.login.pass == this.pass8){
        this.nombre="NELSON GANGAS";
        this.rut="174950148";
        this.router.navigate(['/agregar',this.nombre,this.rut]);
         
      }else{
        this.presentAlert();
        this.login.user=null;
        this.login.pass=null;
      }
    }else if(this.login.user.toUpperCase() == this.inst9.toUpperCase()){
      if(this.login.pass == this.pass9){
        this.nombre="DANIEL CARRASCO";
        this.rut="136937790";
        this.router.navigate(['/agregar',this.nombre,this.rut]);
         
      }else{
        this.presentAlert();
        this.login.user=null;
        this.login.pass=null;
      }
    } else if(this.login.user.toUpperCase() == this.inst12.toUpperCase()){
       if(this.login.pass == this.pass12){
        this.nombre="NICOLAS PALMA";
        this.rut="174638349";
        this.router.navigate(['/agregar',this.nombre,this.rut]);
         
      }else{
        this.presentAlert();
        this.login.user=null;
        this.login.pass=null;
      }
    } else if(this.login.user.toUpperCase() == this.inst13.toUpperCase()){
      if(this.login.pass == this.pass13){
        this.nombre="FELIPE ALARCON";
        this.rut="179249405";
        this.router.navigate(['/agregar',this.nombre,this.rut]);
         
      }else{
        this.presentAlert();
        this.login.user=null;
        this.login.pass=null;
      }

    }else if(this.login.user.toUpperCase() == this.inst14.toUpperCase()){
      if(this.login.pass == this.pass14){
        this.nombre="CHRISTIAN AVELLO";
        this.rut="168104065";
        this.router.navigate(['/agregar',this.nombre,this.rut]);
         
      }else{
        this.presentAlert();
        this.login.user=null;
        this.login.pass=null;
      }

    } else if(this.login.user.toUpperCase() == this.inst15.toUpperCase()){
      if(this.login.pass == this.pass15){
        this.nombre="ARIEL ARANZAEZ";
        this.rut="165202422";
        this.router.navigate(['/agregar',this.nombre,this.rut]);
         
      }else{
        this.presentAlert();
        this.login.user=null;
        this.login.pass=null;
      }
    } else if(this.login.user.toUpperCase() == this.inst16.toUpperCase()){
      if(this.login.pass == this.pass16){
        this.nombre="IVAN REBOLLEDO";
        this.rut="191827147";
        this.router.navigate(['/agregar',this.nombre,this.rut]);
      }else{
        this.presentAlert();
        this.login.user=null;
        this.login.pass=null;
      }
    }
     else{
      this.presentAlert();
      this.login.user=null;
      this.login.pass=null;
    }
    
  }

  async instrGenerico() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ingrese sus datos',
      subHeader: '',
      message: '',
      inputs:[
        {
          name:'nombre',
          id:'nombre',
          placeholder:'Ingrese Nombre y Apellido',
        },{
          name:'Rut',
          id:'Rut',
          placeholder:'Ingrese Rut ',
        }
      ],
      buttons: [{
        text:'No',
        handler: data => {
        } 
      },{
        text:'Si',
        handler: data => {
          this.nombre=data.nombre;
          this.rut=data.Rut;
          this.router.navigate(['/agregar',this.nombre,this.rut]);
          
        } 
      }]
    });

    await alert.present();
  }
  
}
