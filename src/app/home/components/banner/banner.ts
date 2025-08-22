import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription, timer} from 'rxjs';
import {TxiSearchPrincipal} from '../../../shared/components/text-input/txi-search-principal/txi-search-principal';

@Component({
  selector: 'home-banner',
  imports: [
    TxiSearchPrincipal
  ],
  templateUrl: './banner.html',
  styleUrl: './banner.scss'
})
export class Banner implements OnInit, OnDestroy {
  public images: { url: string; alt: string; }[] = [
    { url: '/images/img-banner-01.jpg', alt: 'Playa' },
    { url: '/images/img-banner-02.jpg', alt: 'Bellas Artes' },
    { url: '/images/img-banner-03.jpg', alt: 'Festival' },

  ];
  public currentIndex: number = 0;
  timerSubscription?: Subscription;
  txiPlaceholder: string = '¿A dónde vamos?';
  txiIcon: string = '/icons/search.svg';
  btnText: string = 'Buscar';
  dpdText: string = '¿Qué tipo?';

  constructor() { }

  ngOnInit(): void {
    this.timerSubscription = timer(0, 3000).subscribe(() => {
      this.changeImage();
    });
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  changeImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

}
