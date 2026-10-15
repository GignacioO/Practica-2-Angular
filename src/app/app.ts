import { Component } from '@angular/core';
import { Personaje } from './personaje/personaje';
import { Misiones } from './misiones/misiones';
import { Bestiario } from './bestiario/bestiario';
@Component({
  imports: [Personaje, Misiones, Bestiario],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
