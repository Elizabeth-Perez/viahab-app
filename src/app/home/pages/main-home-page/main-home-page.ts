import { Component } from '@angular/core';
import {Navigation} from '../../components/navigation/navigation';
import {Banner} from '../../components/banner/banner';
import {PopularDestinations} from '../../components/popular-destinations/popular-destinations';
import {HotelPartnerships} from '../../components/hotel-partnerships/hotel-partnerships';
import {FastContact} from '../../components/fast-contact/fast-contact';
import {FooterPrincipal} from '../../../shared/components/footer-principal/footer-principal';
import {FastAboutUs} from '../../components/fast-about-us/fast-about-us';
import {MaintenanceBanner} from '../../../shared/components/banners/maintenance-banner/maintenance-banner';
import {SocialNetwork} from '../../components/social-network/social-network';
import {WhatsappButton} from '../../../shared/components/whatsapp-button/whatsapp-button';

@Component({
  selector: 'home-main-home-page',
  imports: [
    Navigation,
    Banner,
    PopularDestinations,
    HotelPartnerships,
    FastContact,
    FooterPrincipal,
    FastAboutUs,
    MaintenanceBanner,
    SocialNetwork,
    WhatsappButton,
  ],
  templateUrl: './main-home-page.html',
  styleUrl: './main-home-page.scss'
})
export class MainHomePage {

}
