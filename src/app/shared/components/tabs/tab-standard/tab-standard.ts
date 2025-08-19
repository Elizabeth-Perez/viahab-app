import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'shared-tab-standard',
  imports: [
    NgClass
  ],
  templateUrl: './tab-standard.html',
  styleUrl: './tab-standard.scss'
})
export class TabStandard {

  @Input() tabText: string = '';
  isSelected: boolean = false;

  toggleSelected() {
    this.isSelected = !this.isSelected;
  }

}
