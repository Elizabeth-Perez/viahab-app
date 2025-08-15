import {Component, Input} from '@angular/core';
import {BtnIcon} from '../../../shared/components/buttons/btn-icon/btn-icon';

@Component({
  selector: 'home-crd-degraded',
  imports: [
    BtnIcon
  ],
  templateUrl: './crd-degraded.html',
  styleUrl: './crd-degraded.scss'
})
export class CrdDegraded {

  @Input() crdImage: string = '';
  @Input() crdAlt: string = '';
  @Input() crdTitle: string = '';
  @Input() crdSubtitle: string = '';
  @Input() btnGoToURL: string = '';

  btnText: string = 'Descubrir';
  btnIcon: string = '/icons/arrow-right.svg';

}
