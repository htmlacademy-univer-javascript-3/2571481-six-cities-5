export enum AuthStatus {
  Auth = 'AUTH',
  NotAuth = 'NOT_AUTH',
  Unknown = 'UNKNOWN'
}

export enum NameSpace {
  Engine = 'ENGINE',
  Offers = 'OFFERS',
  SingleOffer = 'SINGLEOFFER',
  User = 'USER',
}

export const PlaceTypes: { [key: string]: string } = {
  apartment: 'Apartment',
  room: 'Room',
  house: 'House',
  hotel: 'Hotel',
};

export enum AppRoute {
  Login = '/login',
  MainPage = '/',
  Favorites = '/favorites',
  Offer = '/offer',
}

export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_CURRENT = '/img/pin-active.svg';

export enum CardType {
  Cities = 'cities__card',
  Nearby = 'near-places__card',
  Favorites = 'favorites__card',
}

export const CardImageWrapper = {
  [CardType.Cities]: 'cities__image-wrapper',
  [CardType.Nearby]: 'near-places__image-wrapper',
  [CardType.Favorites]: 'favorites__image-wrapper',
} as const;

export enum APIRoute {
  Offers = '/offers',
  Favorites = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}
