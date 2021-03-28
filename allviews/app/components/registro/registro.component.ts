import { Component, OnInit } from '@angular/core';
import {DataDbService} from '../../services/data-db.service'
import {FormControl,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  createFormGroup(){
    return new FormGroup({
      email: new FormControl(''),
      name:new FormControl(''),
      message: new FormControl('')
    });
  }

  contactForm : FormGroup;
  constructor(private dbData:DataDbService) { 
    this.contactForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  onResetForm(){
    this.contactForm.reset();
  }

  onSaveForm(){
    this.dbData.saveMessage(this.contactForm.value);
    console.log('Saved')
  }

}
