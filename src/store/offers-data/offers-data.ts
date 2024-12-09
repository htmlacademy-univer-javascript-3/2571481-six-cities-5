import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '@const';
import { OffersData } from '@appTypes/state';
import { Offers } from '@appTypes/offer';

const initialState: OffersData = {
  offersList: [],
  isOffersDataLoading: false,
  favoritesCount: 0,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setOffersList: (state, action: PayloadAction<Offers>) => {
      state.offersList = action.payload;
    },
    setOffersDataLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isOffersDataLoading = action.payload;
    },
    updateFavoritesCount: (state, action: PayloadAction<{ offerId: string; isFavorite: boolean }>) => {
      const { offerId, isFavorite } = action.payload;
      
      const updateFavoriteStatus = (offers: Offers) => {
        const offerIndex = offers.findIndex((offer) => offer.id === offerId);
        if (offerIndex !== -1) {
          offers[offerIndex].isFavorite = isFavorite;
          if(isFavorite) {
            state.favoritesCount += 1;
          } else {
            state.favoritesCount -= 1;
          }
        }
      };

      updateFavoriteStatus(state.offersList);
    },
  },
});

export const { setOffersList, setOffersDataLoadingStatus, updateFavoritesCount } = offersData.actions;