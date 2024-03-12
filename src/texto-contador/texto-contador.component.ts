import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-texto-contador',
  templateUrl: './texto-contador.component.html',
  standalone: true,
  styleUrls: ['./texto-contador.component.css']
})
export class TextoContadorComponent {
  @Input() contador: number = 0;
}
