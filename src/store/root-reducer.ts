import { NameSpace } from '@const';
import { combineReducers } from '@reduxjs/toolkit';
import { userProcess } from './user-process/user-process';
import { engineProcess } from './engine-process/engine-process';
import { singleOfferData } from './single-offer-data/single-offer-data';
import { offersData } from './offers-data/offers-data';

export const rootReducer = combineReducers({
  [NameSpace.Engine]: engineProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.SingleOffer]: singleOfferData.reducer,
  [NameSpace.Offers]: offersData.reducer,
});