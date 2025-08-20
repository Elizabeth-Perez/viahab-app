import { Component } from '@angular/core';
import {MainHomePage} from './home/pages/main-home-page/main-home-page';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    MainHomePage,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}

