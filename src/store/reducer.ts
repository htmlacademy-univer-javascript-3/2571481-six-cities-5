import { createReducer } from '@reduxjs/toolkit';
import { setOffersList, changeCity, setReviews } from './action';
import { Offers } from '@appTypes/offer';
import { offers } from '@mocks/offers';
import { CityName } from '@appTypes/city';
import { Reviews } from '@appTypes/review';
import { reviews } from '@mocks/reviews';

type StateType = {
  city: CityName;
  offersList: Offers;
  reviews: Reviews;
};

const initialState: StateType = {
  city: CityName.PARIS,
  offersList: [],
  reviews: reviews,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(setOffersList, (state) => {
      state.offersList = offers;
    })
    .addCase(setReviews, (state) => {
      state.reviews = reviews;
    });
});
