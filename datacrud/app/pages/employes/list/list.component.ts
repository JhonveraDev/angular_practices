import { Component, OnInit } from '@angular/core';
import {Router , NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  navigationExtras: NavigationExtras={
    state:{
      value:null
    }
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onGoToEdit(item: any): void {
    this.NavigationExtras.state.value = item;
    
    this.router.navigate(['edit'], this.navigationExtras);
  }

  onGoToSee(item: any): void {
    this.NavigationExtras.state.value = item;

    this.router.navigate(['details'], this.navigationExtras);
  }

  onGoToDelete(item:any):void{
    alert('Deleted Item')

  }
}
