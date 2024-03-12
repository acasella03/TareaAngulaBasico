import { Component } from '@angular/core';
import {TextoContadorComponent} from "../texto-contador/texto-contador.component";

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  standalone: true,
  imports: [
    TextoContadorComponent
  ],
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  contador = 0;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    if (this.contador > 0) {
      this.contador--;
    }
  }
}
