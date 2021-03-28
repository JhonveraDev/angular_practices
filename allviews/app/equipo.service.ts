import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[]=[
    {
      nombre:'Anderson Vera',
      especialidad:'Frontend developer',
      descripcion:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
    },
    {
      nombre:'Sam',
      especialidad:'CSS',
      descripcion:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
    },
  ]
  constructor() { 
    console.log("Servicio funcionando")
  }

  obtenerEquipo(){
    return this.equipo;
  }
  
}
