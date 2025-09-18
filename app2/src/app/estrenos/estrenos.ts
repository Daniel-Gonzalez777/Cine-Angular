import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { Searchbar } from '../shared/components/searchbar/searchbar';
import { Estrenocard } from '../components/estrenocard/estrenocard';

@Component({
  selector: 'app-estrenos',
  imports: [Nav,Footer,Searchbar,Estrenocard],
  templateUrl: './estrenos.html',
  styleUrl: './estrenos.css'
})
export class Estrenos {

}
