import { createAction } from '@reduxjs/toolkit';
import { Offers } from '@appTypes/offer';
import { Reviews } from '@appTypes/review';
import { City } from '@appTypes/city';
import { AppRoute, AuthStatus } from '@const';

export const setOffersList = createAction<Offers>('offers/setOffersList');
export const changeCity = createAction<City>('city/changeCity');
export const setReviews = createAction<Reviews>('reviews/setReviews');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const requireAuth = createAction<AuthStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<AppRoute>('engine/redirectToRoute');
