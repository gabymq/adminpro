import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes ={
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };


  constructor() { }

  guardarAjsutes() {
    console.log('Guardado en el localStorage');

    localStorage.setItem('ajustes', JSON.stringify( this.ajustes) );
  }

  cargarAjustes() {

    if ( localStorage.getItem('ajustes') ) {
      this.ajustes =  JSON.parse(localStorage.getItem('ajustes') );
      console.log( 'cargando de localStorage');

    } else {
      console.log( 'Usando valores por defecto ');


    }
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
