import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homebanner',
  imports: [RouterLink],
  templateUrl: './homebanner.html',
  styleUrl: './homebanner.css'
})
export class Homebanner {
  protected readonly titulo = signal('Bienvenido a CineApp');
  protected readonly subtitulo = signal('Descubre las mejores películas y estrenos');
  protected readonly botonTexto = signal('Ver Cartelera');
}
