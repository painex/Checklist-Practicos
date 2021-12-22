import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Section } from 'src/app/models/section.model';
import {Todo_dato} from 'src/app/models/Todo_dato';
import {Todo} from 'src/app/models/todo';
import {Informacion} from 'src/app/models/Informacion.model'
import { driverHistory } from 'src/app/models/driverHistory.model';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor(public http: HttpClient) { }
  verSection(): Observable<Section[]>{
    return this.http.get<Section[]>("https://localhost:44384/api/check/obtener");
  }
  //no esta funcionando
  //Todo_dato(Todo_dato: Todo_dato): Observable<Boolean>
  //{https://api.practicos.explor-k.cl
  //  return this.http.post<boolean>("https://localhost:44361/api/check/agregar",Todo_dato);
  //}
  //este Funciona api explor-k
  Todo(mijson): Observable<Boolean>
  {
    //https://api.practicos.ekdesaqa.cl/api/check/Informacion_personal/123456789
    return this.http.post<boolean>("https://api.practicos.explor-k.cl/api/check/agregar",mijson);
    //return this.http.post<boolean>("https://api.practicos.ekdesaqa.cl/api/check/agregar",mijson);

  }
  verInformacion(Informacion: Informacion): Observable<driverHistory>{
    console.log(Informacion);
    return this.http.get<driverHistory>("https://api.practicos.explor-k.cl/api/Query/GetDriver?rut="+Informacion+"");
    //return this.http.get<driverHistory>("https://api.practicos.ekdesaqa.cl/api/Query/GetDriver?rut="+Informacion+"");
  }

  //verInformacion(Informacion: Informacion): Observable<Informacion[]>{
  //  console.log(Informacion);
  //  return this.http.get<Informacion[]>("https://localhost:44361/api/check/Informacion_personal/"+Informacion+"");
  //}
}
