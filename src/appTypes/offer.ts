import { City } from './city';
import { Location } from './location';
import { SomePerson } from './user';

export type OfferForMap = {
    id: string;
    location: Location;
}

export type Offer = OfferForMap & {
    title: string;
    type: string;
    price: number;
    city: City;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
};

export type SingleOffer = Omit<Offer, 'previewImage'> & {
    description: string;
    bedrooms: number;
    goods: string[];
    host: SomePerson;
    images: string[];
    maxAdults: number;
};

export type FullDataOffer = Offer & SingleOffer;

export type Offers = Offer[];
