import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { Contactform } from '../components/contactform/contactform';

@Component({
  selector: 'app-contacto',
  imports: [Nav,Footer,Contactform],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {

}
