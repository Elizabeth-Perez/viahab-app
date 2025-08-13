import { Component } from '@angular/core';
import {BtnIcon} from "../../components/buttons/btn-icon/btn-icon";
import {BtnStandard} from "../../components/buttons/btn-standard/btn-standard";
import {DpdStandard} from '../../components/drop-down/dpd-standard/dpd-standard';
import {TxiSearchPrincipal} from '../../components/text-input/txi-search-principal/txi-search-principal';
import {TxiSearchTravel} from '../../components/text-input/txi-search-travel/txi-search-travel';

@Component({
  selector: 'shared-components-page',
  imports: [
    BtnIcon,
    BtnStandard,
    DpdStandard,
    TxiSearchPrincipal,
    TxiSearchTravel
  ],
  templateUrl: './components-page.html',
  styleUrl: './components-page.scss'
})
export class ComponentsPage {
  text1: string = 'Elizita';
  text2: string = 'Jerzito';
  url: string = '/icons/arrow-right.svg';
  search: string = '/icons/search.svg';
  travel: string = '/icons/airplane.svg';

}
