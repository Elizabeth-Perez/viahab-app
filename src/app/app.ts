import { Component } from '@angular/core';
import {MainHomePage} from './home/pages/main-home-page/main-home-page';

@Component({
  selector: 'app-root',
  imports: [
    MainHomePage
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}

