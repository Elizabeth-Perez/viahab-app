import { Component } from '@angular/core';
import {Navigation} from '../../components/navigation/navigation';
import {Banner} from '../../components/banner/banner';

@Component({
  selector: 'home-main-home-page',
  imports: [
    Navigation,
    Banner
  ],
  templateUrl: './main-home-page.html',
  styleUrl: './main-home-page.scss'
})
export class MainHomePage {

}
