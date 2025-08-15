import { Component } from '@angular/core';
import {Navigation} from '../../components/navigation/navigation';
import {Banner} from '../../components/banner/banner';
import {PopularDestinations} from '../../components/popular-destinations/popular-destinations';
import {HotelPartnerships} from '../../components/hotel-partnerships/hotel-partnerships';

@Component({
  selector: 'home-main-home-page',
  imports: [
    Navigation,
    Banner,
    PopularDestinations,
    HotelPartnerships
  ],
  templateUrl: './main-home-page.html',
  styleUrl: './main-home-page.scss'
})
export class MainHomePage {

}
