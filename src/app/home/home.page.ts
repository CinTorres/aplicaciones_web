import { Component } from '@angular/core';
//import axios from 'axios';
import firebase from 'firebase/app'; 
import'firebase/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
constructor(private alertController:AlertController) {}
export class HomePage {
  direccion:any;
  ciudad:any;
  colonia:any;
  nombre:any;
  apellido:any;
};
ref.child(idUnico).set(datos).then()=>(
  console.log('Guardado Exitosamente!');

)

  async guardarFormulario(){
    const alerta = await this.alertController.create({
      //titulo
      //cuerpo
      //botones
      header: titulo,
      message:mensaje,
      buttons:['cerrar'],
    })
  
  }
