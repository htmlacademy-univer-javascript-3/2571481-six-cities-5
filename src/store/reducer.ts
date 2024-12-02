import { createReducer } from '@reduxjs/toolkit';
import { setOffersList, changeCity, setReviews, setOffersDataLoadingStatus } from './action';
import { Offers } from '@appTypes/offer';
import { Reviews } from '@appTypes/review';
import { Cities, City } from '@appTypes/city';

type StateType = {
  city: City;
  offersList: Offers;
  reviews: Reviews;
  isOffersDataLoading: boolean;
};

const initialState: StateType = {
  city: Cities[0],
  offersList: [],
  reviews: [],
  isOffersDataLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(setOffersList, (state, { payload }) => {
      state.offersList = payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setReviews, (state, { payload }) => {
      state.reviews = payload;
    });
});
