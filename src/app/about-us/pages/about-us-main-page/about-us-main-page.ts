import { Component } from '@angular/core';
import {HeadAboutUs} from '../../components/head-about-us/head-about-us';
import {MaintenanceBanner} from '../../../shared/components/banners/maintenance-banner/maintenance-banner';
import {FooterPrincipal} from '../../../shared/components/footer-principal/footer-principal';
import {AboutUsPrincipal} from '../../components/about-us-principal/about-us-principal';

@Component({
  selector: 'about-us-about-us-main-page',
  imports: [
    HeadAboutUs,
    MaintenanceBanner,
    FooterPrincipal,
    AboutUsPrincipal
  ],
  templateUrl: './about-us-main-page.html',
  styleUrl: './about-us-main-page.scss'
})
export class AboutUsMainPage {

}
