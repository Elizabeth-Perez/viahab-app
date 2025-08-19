import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'shared-dpd-description',
  imports: [
    NgClass
  ],
  templateUrl: './dpd-description.html',
  styleUrl: './dpd-description.scss'
})
export class DpdDescription {
  @Input() dpdTitle: string = '';
  @Input() dpdDescription: string = '';
  @Input() isFirst: boolean = false;

  showTextSection = false;
  dpdIcon: string = '/icons/addition.svg';

  toggleTextSection() {
    this.showTextSection = !this.showTextSection;
    if (!this.showTextSection) {
      this.dpdIcon = '/icons/addition.svg';
    } else {
      this.dpdIcon = '/icons/remove.svg';
    }
  }
}
