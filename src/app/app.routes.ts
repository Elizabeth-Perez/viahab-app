import { Routes } from '@angular/router';
import {DocumentPage} from './shared/pages/document-page/document-page';
import {MainHomePage} from './home/pages/main-home-page/main-home-page';
import {FaqsPage} from './home/pages/faqs-page/faqs-page';


export const routes: Routes = [
  { path: '', component: MainHomePage },
  { path: 'document/:type', component: DocumentPage },
  { path: 'faqs', component: FaqsPage },
];
