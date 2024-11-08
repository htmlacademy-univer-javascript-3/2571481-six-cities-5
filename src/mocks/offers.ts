import { PlaceType } from '@/constants';
import { Offers } from '@/types/offer';

export const offers: Offers = [
  {
    id : 'fafe1b60c24107ccd8f4562213e44849',
    imageUrl : 'img/apartment-01.jpg',
    price : 120,
    rating : 4,
    name : 'Beautiful & luxurious apartment at great location',
    type : PlaceType.Apartment,
    isPremium : true,
    isFavorite : false,
    city : {
      name : 'Amsterdam',
      location : {
        latitude : 52.373036,
        longitude : 4.892413
      }
    },
    location : {
      latitude : 52.373036,
      longitude : 4.892413
    },
  },
  {
    id : 'd1ec3fe3aa3b0ebdb37f2bf7cddf27dc',
    imageUrl : 'img/room.jpg',
    price : 80,
    rating : 3,
    name : 'Wood and stone place',
    type : PlaceType.Room,
    isPremium : false,
    isFavorite : true,
    city : {
      name : 'Amsterdam',
      location : {
        latitude : 52.373036,
        longitude : 4.892413
      }
    },
    location : {
      latitude : 52.373036,
      longitude : 4.892413
    },
  },
  {
    id : '9632572420f9d25191cc848d67ddbc79',
    imageUrl : 'img/apartment-02.jpg',
    price : 132,
    rating : 4,
    name : 'Canal View Prinsengracht',
    type : PlaceType.Apartment,
    isPremium : false,
    isFavorite : true,
    city : {
      name : 'Amsterdam',
      location : {
        latitude : 52.373036,
        longitude : 4.892413
      }
    },
    location : {
      latitude : 52.373036,
      longitude : 4.892413
    },
  },
  {
    id : '9204943c5178df7814444314a773ec1b',
    imageUrl : 'img/apartment-03.jpg',
    price : 180,
    rating : 5,
    name : 'Nice, cozy, warm big bed apartment',
    type : PlaceType.Apartment,
    isPremium : true,
    isFavorite : false,
    city : {
      name : 'Amsterdam',
      location : {
        latitude : 52.373036,
        longitude : 4.892413
      }
    },
    location : {
      latitude : 52.373036,
      longitude : 4.892413
    },
  },
];
