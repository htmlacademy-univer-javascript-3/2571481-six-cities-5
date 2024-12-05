import { createReducer } from '@reduxjs/toolkit';
import { setOffersList, changeCity, setReviews, setOffersDataLoadingStatus, requireAuth } from './action';
import { Offers } from '@appTypes/offer';
import { Reviews } from '@appTypes/review';
import { Cities, City } from '@appTypes/city';
import { AuthStatus } from '@const';

type StateType = {
  city: City;
  offersList: Offers;
  reviews: Reviews;
  isOffersDataLoading: boolean;
  authStatus: AuthStatus;
};

const initialState: StateType = {
  city: Cities[0],
  offersList: [],
  reviews: [],
  isOffersDataLoading: false,
  authStatus: AuthStatus.Unknown,
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
    })
    .addCase(requireAuth, (state, action) => {
      state.authStatus = action.payload;
    });
});
