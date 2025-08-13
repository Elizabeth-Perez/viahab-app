import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'shared-btn-icon',
  imports: [
    NgClass
  ],
  templateUrl: './btn-icon.html',
  styleUrl: './btn-icon.scss'
})
export class BtnIcon {
  @Input() btnText: string = 'Example';
  @Input() btnStyle: string = '1';
  @Input() btnIcon: string = '';
  @Input() iconPosition: 'left' | 'right' = 'right';
}
