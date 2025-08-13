import { Component, signal } from '@angular/core';
import {ComponentsPage} from './shared/pages/components-page/components-page';

@Component({
  selector: 'app-root',
  imports: [
    ComponentsPage
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}

