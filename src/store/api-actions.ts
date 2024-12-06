/* eslint-disable @typescript-eslint/no-unsafe-call */
import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { AppDispatch, State } from '@appTypes/state';
import { APIRoute, AppRoute, AuthStatus } from '@const';
import { Offers, SingleOffer } from '@appTypes/offer';
import { redirectToRoute, requireAuth, setOffersDataLoadingStatus, setOffersList, setReviews, setSingleOffer, setSingleOfferDataLoadingStatus } from './action';
import { AuthData, User } from '@appTypes/user';
import { saveToken, dropToken } from '@services/token';
import { ReviewData, Reviews } from '@appTypes/review';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(setOffersList(data));
  },
);

export const fetchSingleOfferAction = createAsyncThunk<void, { offerId: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSingleOffer',
  async ({offerId}, {dispatch, extra: api}) => {
    dispatch(setSingleOfferDataLoadingStatus(true));
    const {data} = await api.get<SingleOffer>(APIRoute.Offers+'/'+offerId);
    dispatch(fetchReviewsAction({offerId}));
    dispatch(setSingleOfferDataLoadingStatus(false));
    dispatch(setSingleOffer(data));
  },
);

export const fetchReviewsAction = createAsyncThunk<void, { offerId: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async ({offerId}, {dispatch, extra: api}) => {
    dispatch(setSingleOfferDataLoadingStatus(true));
    const {data} = await api.get<Reviews>(APIRoute.Comments+'/'+offerId);
    dispatch(setSingleOfferDataLoadingStatus(false));
    dispatch(setReviews(data));
  },
);

export const postReviewAction = createAsyncThunk<void, ReviewData, {
  state: State;
  extra: AxiosInstance;
}>(
  'review/postReview',
  async ({comment, rating, id}, {extra: api}) => {
    const numericRating = Number(rating);
    await api.post(APIRoute.Comments+'/'+id, {comment, rating: numericRating});
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuth(AuthStatus.Auth));
    } catch {
      dispatch(requireAuth(AuthStatus.NotAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async (payload, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<User>(APIRoute.Login, payload);
    saveToken(token);
    dispatch(requireAuth(AuthStatus.Auth));
    dispatch(redirectToRoute(AppRoute.MainPage));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuth(AuthStatus.NotAuth));
    dispatch(redirectToRoute(AppRoute.MainPage));
  },
);
