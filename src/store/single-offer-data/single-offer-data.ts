import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '@const';
import { SingleOfferData } from '@appTypes/state';
import { Offers, SingleOffer } from '@appTypes/offer';
import { Review, Reviews } from '@appTypes/review';
import { fetchNearbyOffersAction, fetchReviewsAction, fetchSingleOfferAction } from '@store/api-actions';

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
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state) => {
        state.isSingleOfferDataLoading = false;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.isSingleOfferDataLoading = false;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isSingleOfferDataLoading = true;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state) => {
        state.isSingleOfferDataLoading = false;
      })
      .addCase(fetchNearbyOffersAction.rejected, (state) => {
        state.isSingleOfferDataLoading = false;
      })
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.isSingleOfferDataLoading = true;
      })
      .addCase(fetchSingleOfferAction.fulfilled, (state) => {
        state.isSingleOfferDataLoading = false;
      })
      .addCase(fetchSingleOfferAction.rejected, (state) => {
        state.isSingleOfferDataLoading = false;
      })
      .addCase(fetchSingleOfferAction.pending, (state) => {
        state.isSingleOfferDataLoading = true;
      })
  }
});

export const { setSingleOffer, setNearbyOffers, setReviews, sendReview, setSingleOfferDataLoadingStatus } = singleOfferData.actions;