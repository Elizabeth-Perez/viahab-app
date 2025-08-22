import {Component, Input} from '@angular/core';
import {BtnIcon} from '../../../shared/components/buttons/btn-icon/btn-icon';

@Component({
  selector: 'home-crd-standard',
  imports: [
  ],
  templateUrl: './crd-standard.html',
  styleUrl: './crd-standard.scss'
})
export class CrdStandard {

  @Input() crdImage: string = '';
  @Input() crdAlt: string = '';
  @Input() crdUrl: string = '';
}
