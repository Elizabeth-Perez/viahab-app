import { Component } from '@angular/core';
import {CrdLabel} from '../crd-label/crd-label';

@Component({
  selector: 'home-hotel-partnerships',
  imports: [
    CrdLabel
  ],
  templateUrl: './hotel-partnerships.html',
  styleUrl: './hotel-partnerships.scss'
})
export class HotelPartnerships {

  cards:
    { imageUrl: string;
      alt: string;
      title: string;
      description: string;
      label: string;
      url: string;
    }[] = [
    { imageUrl: '/images/img-hotel-01.jpg',
      alt: 'Fiesta Inn Aeropuerto',
      title: 'Fiesta Inn Aeropuerto',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin ipsum posuere rutrum tristique. Sed et quam ultrices, eleifend',
      label: 'Ciudad de México',
      url: 'https://google.com'
    },
    { imageUrl: '/images/img-hotel-02.jpg',
      alt: 'Palacio Mundo Imperial',
      title: 'Palacio Mundo Imperial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin ipsum posuere rutrum tristique. Sed et quam ultrices, eleifend',
      label: 'Acapulco',
      url: 'https://google.com'
    },
    { imageUrl: '/images/img-hotel-03.jpg',
      alt: 'Hotel Mision Puebla Angelopolis',
      title: 'Hotel Mision Puebla Angelopolis',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin ipsum posuere rutrum tristique. Sed et quam ultrices, eleifend',
      label: 'Puebla',
      url: 'https://google.com'
    },
    { imageUrl: '/images/img-hotel-04.jpg',
      alt: 'Casa de las Conchas',
      title: 'Casa de las Conchas',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin ipsum posuere rutrum tristique. Sed et quam ultrices, eleifend',
      label: 'Cuernavaca',
      url: 'https://google.com'
    },
    { imageUrl: '/images/img-hotel-05.jpg',
      alt: 'Hotel Galerias',
      title: 'Hotel Galerias',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin ipsum posuere rutrum tristique. Sed et quam ultrices, eleifend',
      label: 'Tepoztlan',
      url: 'https://google.com'
    },
    { imageUrl: '/images/img-hotel-06.jpg',
      alt: 'Our Habitas',
      title: 'Our Habitas',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin ipsum posuere rutrum tristique. Sed et quam ultrices, eleifend',
      label: 'San Miguel de Allende',
      url: 'https://google.com'
    },
    { imageUrl: '/images/img-hotel-07.jpg',
      alt: 'El Santuario Resort',
      title: 'El Santuario Resort',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin ipsum posuere rutrum tristique. Sed et quam ultrices, eleifend',
      label: 'Valle de Bravo',
      url: 'https://google.com'
    },
  ];

}
