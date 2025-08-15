import { Component } from '@angular/core';
import {CrdDegraded} from '../crd-degraded/crd-degraded';

@Component({
  selector: 'home-popular-destinations',
  imports: [
    CrdDegraded
  ],
  templateUrl: './popular-destinations.html',
  styleUrl: './popular-destinations.scss'
})
export class PopularDestinations {

  cards: {
    imageUrl: string;
    alt: string;
    title: string;
    subtitle: string;
    url: string;
  }[] = [
    { imageUrl: '/images/img-cdmx-mex-01.jpg',
      alt: 'Ciudad de México, México',
      title: 'Ciudad de México, México',
      subtitle: 'Nacionales',
      url: 'https://google.com'
    },
    { imageUrl: '/images/img-paris-fra-01.jpg',
      alt: 'Paris, Francia',
      title: 'Paris, Francia',
      subtitle: 'Internacionales',
      url: 'https://facebook.com'
    },
    { imageUrl: '/images/img-riodejaneiro-bra-01.jpg',
      alt: 'Festival Rio de Jainero, Brasil',
      title: 'Festival Rio de Jainero, Brasil',
      subtitle: 'Festivales',
      url: 'https://instagram.com'
    },
    { imageUrl: '/images/img-loscabos-mex-01.jpg',
      alt: 'Los Cabos, México',
      title: 'Los Cabos, México',
      subtitle: 'Sol y Playa',
      url: 'https://x.com'
    },
  ];

}
