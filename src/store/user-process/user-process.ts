import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthStatus, NameSpace } from '@const';
import { UserProcess } from '@appTypes/state';
import { User } from '@appTypes/user';
import { Offer, Offers } from '@appTypes/offer';
import { checkAuthAction, loginAction, logoutAction } from '@store/api-actions';

const initialState: UserProcess = {
  authStatus: AuthStatus.NotAuth,
  user: null,
  favorites: [],
  isUserDataLoding: false,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setAuthStatus: (state, action: PayloadAction<AuthStatus>) => {
      state.authStatus = action.payload;
    },
    setUser: (state, action: PayloadAction<User|null>) => {
      state.user = action.payload;
    },
    setFavoriteOffers: (state, action: PayloadAction<Offers>) => {
      state.favorites = action.payload;
    },
    updateUserFavorites: (state, action: PayloadAction<{ editedOffer: Offer }>) => {
      const { editedOffer } = action.payload;

      const updateFavoriteStatus = (offers: Offers) => {
        const offerIndex = offers.findIndex((offer) => offer.id === editedOffer.id);
        if (offerIndex !== -1) {
          offers.splice(offerIndex, 1);
        } else {
          offers.push(editedOffer);
        }
      };

      updateFavoriteStatus(state.favorites);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authStatus = AuthStatus.Auth;
        state.isUserDataLoding = false;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = AuthStatus.NotAuth;
        state.isUserDataLoding = false;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authStatus = AuthStatus.Auth;
        state.isUserDataLoding = false;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authStatus = AuthStatus.NotAuth;
        state.isUserDataLoding = false;
      })
      .addCase(loginAction.pending, (state) => {
        state.isUserDataLoding = true;
      })
      .addCase(checkAuthAction.pending, (state) => {
        state.isUserDataLoding = true;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = AuthStatus.NotAuth;
        state.isUserDataLoding = false;
      });
  }
});

export const { setAuthStatus, setUser, setFavoriteOffers, updateUserFavorites } = userProcess.actions;
