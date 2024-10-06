export enum PlaceType {
    Room = 'Room',
    Apartment = 'Apartment'
}

export type PlaceInfo = {
    id: string;
    imageUrl: string;
    priceValue: number;
    placeRating: number;
    placeName: string;
    placeType: PlaceType;
    isPremium: boolean;
    isFavorite: boolean;
};

export interface AppProps {
    placesToStayCount: number;
}
