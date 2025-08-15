import { Component } from '@angular/core';
import {TxiSearchTravel} from '../../../shared/components/text-input/txi-search-travel/txi-search-travel';

@Component({
  selector: 'home-fast-contact',
  imports: [
    TxiSearchTravel
  ],
  templateUrl: './fast-contact.html',
  styleUrl: './fast-contact.scss'
})
export class FastContact {

  btnText: string ="Enviar"
  txiPlaceholder: string ="Cuentanos sobre tu viaje"
  txiIcon: string = "/icons/airplane.svg"

}
