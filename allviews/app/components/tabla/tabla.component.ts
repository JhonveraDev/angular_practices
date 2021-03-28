import { Component,  } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  constructor() { }

  show:boolean=true;
  
  animales:Array<any> = [
    {tipo:'Perro',nombre:'lisa',edad:10},
    {tipo:'Leon',nombre:'Razor',edad:1},
    {tipo:'Gato',nombre:'Baki',edad:5}
  ]

  saludo(){
    console.log('seleccionado TIPO')
  }


}
