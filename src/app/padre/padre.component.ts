import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  
  mensaje?:string
  enviarMensaje?:string;

  recibirMensajeDelHijo(mensajeDelHijo:string)
  {
    this.mensaje = mensajeDelHijo;
  }

  
}
