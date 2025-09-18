import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})


export class Nav {
  protected readonly inicio = signal("Inicio");
  protected readonly cartelera = signal("Cartelera");
  protected readonly estrenos = signal("Estrenos");
  protected readonly contacto = signal("Contacto");
}
