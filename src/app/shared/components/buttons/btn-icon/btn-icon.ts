import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';
import {Router} from '@angular/router';

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
  @Input() btnGoToURL: string = '';

  constructor(private router: Router) {}

  goToURL() {
    if (this.btnGoToURL.startsWith('http')) {
      window.open(this.btnGoToURL, '_blank');
    } else {
      this.router.navigate([this.btnGoToURL])
        .then(success => {
          if (success) {
            console.log('Navegación interna exitosa');
          } else {
            console.warn('La navegación interna fue bloqueada');
          }
        })
        .catch(error => {
          console.error('Error al navegar internamente:', error);
        });
    }
  }
}
