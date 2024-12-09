import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '@const';
import { SingleOfferData } from '@appTypes/state';
import { Offers, SingleOffer } from '@appTypes/offer';
import { Review, Reviews } from '@appTypes/review';

const initialState: SingleOfferData = {
  singleOffer: null,
  nearbyOffers: [],
  reviews: [],
  isSingleOfferDataLoading: false
};

export const singleOfferData = createSlice({
  name: NameSpace.SingleOffer,
  initialState,
  reducers: {
    setSingleOffer: (state, action: PayloadAction<{ offer: SingleOffer }>) => {
      state.singleOffer = action.payload.offer;
    },
    setNearbyOffers: (state, action: PayloadAction<{ nearbyOffers: Offers }>) => {
      state.nearbyOffers = action.payload.nearbyOffers;
    },
    setReviews: (state, action: PayloadAction<{ reviews: Reviews }>) => {
      state.reviews = action.payload.reviews;
    },
    setSingleOfferDataLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isSingleOfferDataLoading = action.payload;
    },
    sendReview: (state, action: PayloadAction<Review>) => {
      state.reviews.push(action.payload);
    },
  },
});

export const { setSingleOffer, setNearbyOffers, setReviews, sendReview, setSingleOfferDataLoadingStatus } = singleOfferData.actions;