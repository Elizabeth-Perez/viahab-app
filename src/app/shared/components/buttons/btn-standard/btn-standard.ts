import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';
import {Router} from '@angular/router';

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
