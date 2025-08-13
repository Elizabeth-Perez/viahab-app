import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'shared-btn-standard',
  imports: [
    NgClass
  ],
  templateUrl: './btn-standard.html',
  styleUrl: './btn-standard.scss'
})
export class BtnStandard {
  @Input() btnText: string = 'Button';
  @Input() btnStyle: string = '1';
}
