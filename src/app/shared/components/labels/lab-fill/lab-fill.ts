import {Component, Input} from '@angular/core';

@Component({
  selector: 'shared-lab-fill',
  imports: [],
  templateUrl: './lab-fill.html',
  styleUrl: './lab-fill.scss'
})
export class LabFill {

  @Input() labText: string = '';
}
