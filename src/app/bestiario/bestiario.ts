import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-bestiario',
  styleUrl: './bestiario.css',
  templateUrl: './bestiario.html',
})
export class Bestiario {
  zonasExploradas: number=(3);
  enemigos = signal([
    {nombre: 'Ignacio', tipo: 'Bestia'},
    {nombre: 'Valen', tipo: 'No-muerto'},
    {nombre: 'May', tipo: 'Demonio'}

  ])
}
