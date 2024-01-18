import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  contador: number = 0;
  paramPadre = "Mesaje desde el componente padre";
  
  incrementar()
  {
    this.contador++
  }
  decrementar()
  {
    this.contador--
  }
}
