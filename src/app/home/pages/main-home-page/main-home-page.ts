import { Component } from '@angular/core';
import {Navigation} from '../../components/navigation/navigation';
import {Banner} from '../../components/banner/banner';
import {PopularDestinations} from '../../components/popular-destinations/popular-destinations';
import {HotelPartnerships} from '../../components/hotel-partnerships/hotel-partnerships';
import {FastContact} from '../../components/fast-contact/fast-contact';
import {FrequentlyAskedQuestions} from '../../components/frecuently-asked-questions/frequently-asked-questions';

@Component({
  selector: 'home-main-home-page',
  imports: [
    Navigation,
    Banner,
    PopularDestinations,
    HotelPartnerships,
    FastContact,
    FrequentlyAskedQuestions
  ],
  templateUrl: './main-home-page.html',
  styleUrl: './main-home-page.scss'
})
export class MainHomePage {

}
