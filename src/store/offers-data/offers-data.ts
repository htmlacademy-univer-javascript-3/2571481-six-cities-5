import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '@const';
import { OffersData } from '@appTypes/state';
import { Offer, Offers } from '@appTypes/offer';
import { fetchOffersAction } from '@store/api-actions';
import { useAppDispatch } from '@hooks/index';
import { updateFavorites } from '@store/user-process/user-process';

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
    setFavoritesCount: (state, action: PayloadAction<number>) => {
      state.favoritesCount = action.payload;
    },
    updateFavoritesCount: (state, action: PayloadAction<{ editedOffer: Offer }>) => {
      const { editedOffer } = action.payload;
      
      const updateFavoriteStatus = (offers: Offers) => {
        const offerIndex = offers.findIndex((offer) => offer.id === editedOffer.id);
        if (offerIndex !== -1) {
          offers[offerIndex] = editedOffer;
        }
      };

      updateFavoriteStatus(state.offersList);
      const dispatch = useAppDispatch();
      dispatch(updateFavorites({editedOffer}));
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.fulfilled, (state) => {
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
  }
});

export const { setOffersList, setOffersDataLoadingStatus, updateFavoritesCount, setFavoritesCount } = offersData.actions;