import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news',
  imports: [],
  templateUrl: './news.html',
  styleUrl: './news.css'
})
export class News {
  protected readonly noticia1Titulo = signal('Estreno: Spider-Man: Beyond');
  protected readonly noticia1Descripcion = signal('La nueva aventura de Spider-Man llega a tu cine favorito.');
  protected readonly noticia1Link = signal('https://www.hollywoodreporter.com/movies/movie-news/spider-man-beyond-the-spider-verse-release-1236320001/');

  protected readonly noticia2Titulo = signal('Premios Oscar 2025');
  protected readonly noticia2Descripcion = signal('Conoce las películas nominadas a los Premios Oscar 2025.');
  protected readonly noticia2Link = signal('https://abc.com/news/8d96bb37-bd59-4c28-a470-46f244f63b3b/category/3590742');

  protected readonly noticia3Titulo = signal('Reseña: Avatar 3');
  protected readonly noticia3Descripcion = signal('Todo lo que necesitas saber sobre la tercera parte de Avatar.');
  protected readonly noticia3Link = signal('https://www.espinof.com/trailers/trailer-avatar-3-tiene-pinta-ser-todo-que-necesito-para-ir-cabeza-al-cine-quedarme-fascinado');
}
