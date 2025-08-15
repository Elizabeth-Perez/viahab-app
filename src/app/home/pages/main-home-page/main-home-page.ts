import { Component } from '@angular/core';
import {Navigation} from '../../components/navigation/navigation';
import {Banner} from '../../components/banner/banner';
import {PopularDestinations} from '../../components/popular-destinations/popular-destinations';

@Component({
  selector: 'home-main-home-page',
  imports: [
    Navigation,
    Banner,
    PopularDestinations
  ],
  templateUrl: './main-home-page.html',
  styleUrl: './main-home-page.scss'
})
export class MainHomePage {

}
