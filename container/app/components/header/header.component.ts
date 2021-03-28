import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent implements OnInit{

  constructor() { 
    console.log('Header Creandose')
  }

  ngOnInit(){
    console.log('Componente ya cargado y procesado!')
  }
  
  //Creador de las variables para el componente Header
  nombre = "Anderson Vera";
  suma=0;
  
  cambiarNombre(){
    this.nombre='Jhon Barrero'
  }

  sumaUno(){
    this.suma += 1; 
  }




}
