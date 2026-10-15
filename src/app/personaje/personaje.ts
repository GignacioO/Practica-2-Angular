import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-personaje',
  styleUrl: './personaje.css',
  templateUrl: './personaje.html',
  

})
export class Personaje {
  nombre = signal('Guerrero');
  clase = signal('Paladin');
  nivel = signal(999);
  oro = signal(100);
}
