import { Component } from '@angular/core';
import { Footer } from '../shared/components/footer/footer';
import { Nav } from '../shared/components/nav/nav';
import { News } from '../components/news/news';
import { REVIEWS } from '../components/reviews/reviews';
import { Homebanner } from '../components/homebanner/homebanner';

@Component({
  selector: 'app-home',
  imports: [Nav,Homebanner,News,REVIEWS,Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
