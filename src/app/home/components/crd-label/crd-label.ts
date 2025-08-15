import {Component, Input} from '@angular/core';
import {BtnIcon} from '../../../shared/components/buttons/btn-icon/btn-icon';
import {LabFill} from '../../../shared/components/labels/lab-fill/lab-fill';

@Component({
  selector: 'home-crd-label',
  imports: [
    BtnIcon,
    LabFill
  ],
  templateUrl: './crd-label.html',
  styleUrl: './crd-label.scss'
})
export class CrdLabel {
  @Input() crdImage: string = '';
  @Input() crdAlt: string = '';
  @Input() crdTitle: string = '';
  @Input() crdSubtitle: string = '';
  @Input() labText: string = '';
  @Input() btnGoToURL: string = '';

  showTextSection = false;
  btnText: string = 'Visitar';
  btnIcon: string = '/icons/arrow-right.svg';

  toggleTextSection() {
    this.showTextSection = !this.showTextSection;
  }
}
