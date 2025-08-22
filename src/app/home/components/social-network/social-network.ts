import { Component } from '@angular/core';
import {CrdStandard} from '../crd-standard/crd-standard';

@Component({
  selector: 'home-social-network',
  imports: [
    CrdStandard
  ],
  templateUrl: './social-network.html',
  styleUrl: './social-network.scss'
})
export class SocialNetwork {

  cards: {
    imageUrl: string;
    alt: string;
    url: string;
  }[] = [
    { imageUrl: '/images/img-instagram-01.png',
      alt: 'Xelha, México',
      url: 'https://www.instagram.com/viahaboficial/p/DKSJz-GMBcG/'
    },
    { imageUrl: '/images/img-instagram-02.png',
      alt: 'Tips',
      url: 'https://www.instagram.com/viahaboficial/p/DKNATK4t2H4/'
    },
    { imageUrl: '/images/img-instagram-03.png',
      alt: 'MEX - USA',
      url: 'https://www.instagram.com/viahaboficial/p/DKH2s6xBDhK/'
    },
    { imageUrl: '/images/img-instagram-04.png',
      alt: 'Conjuro al cielo',
      url: 'https://www.instagram.com/viahaboficial/p/DKCtB7XvDZK/'
    },
    { imageUrl: '/images/img-instagram-05.png',
      alt: 'Ixtapa',
      url: 'https://www.instagram.com/viahaboficial/p/DJ9jcMlK2Ba/'
    },
    { imageUrl: '/images/img-instagram-06.png',
      alt: 'Tequila, Jalisco',
      url: 'https://www.instagram.com/viahaboficial/p/DJ5jJY_TxxD/'
    },
    { imageUrl: '/images/img-instagram-07.png',
      alt: 'Conjuro al cielo',
      url: 'https://www.instagram.com/viahaboficial/p/DJ2ksJhzUvF/'
    },
  ];

}
