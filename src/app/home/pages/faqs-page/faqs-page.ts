import { Component } from '@angular/core';
import {FooterPrincipal} from '../../../shared/components/footer-principal/footer-principal';
import {FrequentlyAskedQuestions} from '../../components/frecuently-asked-questions/frequently-asked-questions';
import {MaintenanceBanner} from '../../../shared/components/banners/maintenance-banner/maintenance-banner';
import {Navigation} from '../../components/navigation/navigation';

@Component({
  selector: 'home-faqs-page',
  imports: [
    FooterPrincipal,
    FrequentlyAskedQuestions,
    MaintenanceBanner,
    Navigation,
  ],
  templateUrl: './faqs-page.html',
  styleUrl: './faqs-page.scss'
})
export class FaqsPage {

}
