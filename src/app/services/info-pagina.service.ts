import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient ) {

    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo() {

    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;

    });
  }


  private cargarEquipo() {

    // Leer el archivo JSON
    this.http.get('https://angular-html-9dc21-default-rtdb.firebaseio.com/team.json')
    .subscribe( (resp: any[]) => {

      this.equipo = resp;

    });


    // this.equipo = resp
  }

}



