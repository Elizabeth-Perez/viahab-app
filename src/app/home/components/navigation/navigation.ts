import { Component } from '@angular/core';
import {BtnStandard} from '../../../shared/components/buttons/btn-standard/btn-standard';
import {MniStandard} from '../mni-standard/mni-standard';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'home-navigation',
  imports: [
    BtnStandard,
    MniStandard,
    NgForOf
  ],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})
export class Navigation {

  btnText: string = 'Contactar';
  menuItems: string[] = ['Inicio', 'Viajes', 'Acerca de'];
}
