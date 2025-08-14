import {Component, Input} from '@angular/core';

@Component({
  selector: 'shared-dpd-standard',
  imports: [
  ],
  templateUrl: './dpd-standard.html',
  styleUrl: './dpd-standard.scss'
})
export class DpdStandard {

  @Input() dpdText: string = 'Selected item';

  iconUrl: string = '/icons/arrow-down-black.svg';
  isBold: boolean = false;

  toggleBold() {
    this.isBold = !this.isBold;
    if (!this.isBold) {
      this.iconUrl = '/icons/arrow-down-black.svg';
    } else {
      this.iconUrl = '/icons/arrow-right.svg';
    }
  }
}
