import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-reviews',
  imports: [],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css'
})
export class REVIEWS {
  protected readonly review1Nombre = signal('Juan P.');
  protected readonly review1Comentario = signal('¡Excelente película! La acción y los efectos especiales son impresionantes, y volver a ver a los otros spidermans fue lo mejor.');
  protected readonly review1Pelicula = signal('Spider-Man: No Way Home');

  protected readonly review2Nombre = signal('Laura M.');
  protected readonly review2Comentario = signal('Muy entretenida, aunque el guion pudo ser mejor ya que no da mucho miedo.');
  protected readonly review2Pelicula = signal('Jeepers Creepers');

  protected readonly review3Nombre = signal('Carlos R.');
  protected readonly review3Comentario = signal('Una experiencia visual muy bacana, pero un poco larga.');
  protected readonly review3Pelicula = signal('Avatar 2');
}
