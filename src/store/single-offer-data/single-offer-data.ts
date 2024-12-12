import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '@const';
import { SingleOfferData } from '@appTypes/state';
import { Offers, SingleOffer } from '@appTypes/offer';
import { Review, Reviews } from '@appTypes/review';
import { fetchNearbyOffersAction, fetchReviewsAction, fetchSingleOfferAction, postReviewAction } from '@store/api-actions';

const initialState: SingleOfferData = {
  singleOffer: null,
  nearbyOffers: [],
  reviews: [],
  isSingleOfferDataLoading: false,
  isReviewPosting: false,
  isFormAccepted: false,
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
    setFormAcceptedStatus: (state, action: PayloadAction<boolean>) => {
      state.isFormAccepted = action.payload;
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
      .addCase(postReviewAction.pending, (state) => {
        state.isReviewPosting = true;
      })
      .addCase(postReviewAction.fulfilled, (state) => {
        state.isReviewPosting = false;
        state.isFormAccepted = true;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.isReviewPosting = false;
        state.isFormAccepted = false;
      });
  }
});

export const { setSingleOffer, setNearbyOffers, setReviews, sendReview, setSingleOfferDataLoadingStatus, setFormAcceptedStatus } = singleOfferData.actions;
