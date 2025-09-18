import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './searchbar.html',
  styleUrl: './searchbar.css'
})
export class Searchbar {
  protected readonly searchQuery = signal('');
  protected readonly placeholder = signal('Buscar películas.');
}