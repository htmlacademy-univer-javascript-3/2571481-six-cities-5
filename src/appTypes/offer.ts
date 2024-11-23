import { City } from './city';
import { PlaceType } from '@const';
import { Location } from './location';

export type Offer = {
    id: string;
    imageUrl: string;
    price: number;
    rating: number;
    name: string;
    type: PlaceType;
    isPremium: boolean;
    isFavorite: boolean;
    city: City;
    location: Location;
};

export type Offers = Offer[];
