import { Routes } from '@angular/router';
import {DocumentPage} from './shared/pages/document-page/document-page';
import {MainHomePage} from './home/pages/main-home-page/main-home-page';
import {FaqsPage} from './home/pages/faqs-page/faqs-page';
import {ContactPage} from './contact/pages/contact-page/contact-page';
import {AboutUsMainPage} from './about-us/pages/about-us-main-page/about-us-main-page';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainHomePage },
  { path: 'document/:type', component: DocumentPage },
  { path: 'faqs', component: FaqsPage },
  { path: 'contact', component: ContactPage },
  { path: 'about-us', component: AboutUsMainPage },
];
