import { Component, OnInit } from '@angular/core';
import { CheckService } from '../services/check-services/check.service';
import { Section } from '../models/section.model';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  sections: Section[];
  ruts:Array<any>;

  constructor(private checkServicios: CheckService, private storage:Storage) { 
    this.obtener_localstorage();
  }

  obtener_localstorage(){
    let rut = localStorage.getItem("rut");

  }
  ngOnInit() {
    this.storage.get('persona').then((data)=>{
      if(data!=null){
        console.log(data);
        this.ruts=data;
      }
    });
    this.checkServicios.verSection().subscribe((sections)=>{
      this.sections = sections;
      this.obtener_localstorage();
      
      let rut = localStorage.getItem("rut");
      //this.ruts=rut;
      
    },(errorObtenido)=> {
      console.log(errorObtenido);
      
      
      
    })
  }

}
