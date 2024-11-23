import { createAction } from '@reduxjs/toolkit';
import { Offers } from '@appTypes/offer';
import { CityName } from '@appTypes/city';
import { Reviews } from '@appTypes/review';

export const setOffersList = createAction<Offers>('offers/setOffersList');
export const changeCity = createAction<CityName>('city/changeCity');
export const setReviews = createAction<Reviews>('reviews/setReviews');
