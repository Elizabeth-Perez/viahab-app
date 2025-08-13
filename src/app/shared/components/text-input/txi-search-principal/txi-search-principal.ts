import {Component, Input} from '@angular/core';
import {DpdStandard} from '../../drop-down/dpd-standard/dpd-standard';
import {BtnStandard} from '../../buttons/btn-standard/btn-standard';

@Component({
  selector: 'shared-txi-search-principal',
  imports: [
    DpdStandard,
    BtnStandard
  ],
  templateUrl: './txi-search-principal.html',
  styleUrl: './txi-search-principal.scss'
})
export class TxiSearchPrincipal {

  @Input() dpdText: string = '';
  @Input() txiIcon: string = '';
  @Input() txiPlaceholder: string = '';
  @Input() btnText: string = '';

}
