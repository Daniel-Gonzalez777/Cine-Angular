import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { Searchbar } from '../shared/components/searchbar/searchbar';
import { Peliculacard } from '../components/peliculacard/peliculacard';

@Component({
  selector: 'app-cartelera',
  imports: [Nav,Footer,Searchbar,Peliculacard],  
  templateUrl: './cartelera.html',
  styleUrl: './cartelera.css'
})
export class Cartelera {

}
