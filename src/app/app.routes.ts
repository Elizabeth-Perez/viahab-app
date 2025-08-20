import { Routes } from '@angular/router';
import {DocumentPage} from './shared/pages/document-page/document-page';
import {MainHomePage} from './home/pages/main-home-page/main-home-page';


export const routes: Routes = [
  { path: '', component: MainHomePage },
  { path: 'terms/:type', component: DocumentPage },
];
