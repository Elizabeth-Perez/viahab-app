import { Component } from '@angular/core';
import {FormularyPrincipal} from '../../components/formulary-principal/formulary-principal';
import {HeadContact} from '../../components/head-contact/head-contact';
import {MaintenanceBanner} from '../../../shared/components/banners/maintenance-banner/maintenance-banner';
import {FooterPrincipal} from '../../../shared/components/footer-principal/footer-principal';

@Component({
  selector: 'contact-contact-page',
  imports: [
    FormularyPrincipal,
    HeadContact,
    MaintenanceBanner,
    FooterPrincipal
  ],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss'
})
export class ContactPage {

}
