import {PlaceType, PlaceInfo} from '@/constants-and-types/types';

export const placeOffers: PlaceInfo[] = [
  {
    id: 'fafe1b60c24107ccd8f4562213e44849',
    imageUrl: 'img/apartment-01.jpg',
    priceValue: 120,
    placeRating: 4,
    placeName: 'Beautiful & luxurious apartment at great location',
    placeType: PlaceType.Apartment,
    isPremium: true,
    isFavorite: false,
  },
  {
    id: 'd1ec3fe3aa3b0ebdb37f2bf7cddf27dc',
    imageUrl: 'img/room.jpg',
    priceValue: 80,
    placeRating: 4,
    placeName: 'Wood and stone place',
    placeType: PlaceType.Room,
    isPremium: false,
    isFavorite: true
  },
  {
    id: '9632572420f9d25191cc848d67ddbc79',
    imageUrl: 'img/apartment-02.jpg',
    priceValue: 132,
    placeRating: 4,
    placeName: 'Canal View Prinsengracht',
    placeType: PlaceType.Apartment,
    isPremium: false,
    isFavorite: false
  },
  {
    id: '9204943c5178df7814444314a773ec1b',
    imageUrl: 'img/apartment-03.jpg',
    priceValue: 180,
    placeRating: 5,
    placeName: 'Nice, cozy, warm big bed apartment',
    placeType: PlaceType.Apartment,
    isPremium: true,
    isFavorite: false
  },
];
