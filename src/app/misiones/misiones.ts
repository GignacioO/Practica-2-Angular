import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-misiones',
  styleUrl: './misiones.css',
  templateUrl: './misiones.html',
})
export class Misiones {
  tareas = signal([
    {titulo: 'Ganar una discusión con una mujer', dificultad:'Dificil'},
    {titulo: 'Ganar una discusión con un hombre sin piñas', dificultad:'Media'},
    {titulo: 'Ganar una discusión con un hombre con piñas', dificultad:'Facil'}
  ])
}
