import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'home-mni-standard',
  imports: [
    NgClass
  ],
  templateUrl: './mni-standard.html',
  styleUrl: './mni-standard.scss'
})
export class MniStandard {

  @Input() mniText: string = '';
  isSelected: boolean = false;

  toggleSelected() {
    this.isSelected = !this.isSelected;
  }
}
