import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { FooterComponent } from './components/footer/footer.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

//Servicios
import {EquipoService} from './equipo.service';
import { RegistroComponent } from './components/registro/registro.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment'
import {DataDbService} from './services/data-db.service'

const routes : Routes =[
  {path:'contacto',component:ContactoComponent},
  {path:'inicio',component:CuerpoComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'mensaje',component:RegistroComponent},
  {path: '**', redirectTo: 'inicio', pathMatch: 'full'},

];

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    EncabezadoComponent,
    FooterComponent,
    CuerpoComponent,
    ContactoComponent,
    NosotrosComponent,
    RegistroComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [
    EquipoService,
    DataDbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
