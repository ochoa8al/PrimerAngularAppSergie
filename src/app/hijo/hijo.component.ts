import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Input() recibirMensajeDelPadre?: string;

  @Output() EventoDelUsuario = new EventEmitter<string>();

  mensajeHijo?: string
  enviarMensaje()
  {
    this.EventoDelUsuario.emit(this.mensajeHijo)
  }

}
