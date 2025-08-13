import {Component, Input} from '@angular/core';
import {BtnStandard} from "../../buttons/btn-standard/btn-standard";

@Component({
  selector: 'shared-txi-search-travel',
    imports: [
        BtnStandard
    ],
  templateUrl: './txi-search-travel.html',
  styleUrl: './txi-search-travel.scss'
})
export class TxiSearchTravel {
  @Input() txiIcon: string = '';
  @Input() txiPlaceholder: string = '';
  @Input() btnText: string = '';
}
