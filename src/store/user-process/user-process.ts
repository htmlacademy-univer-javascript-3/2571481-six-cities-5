import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthStatus, NameSpace } from '@const';
import { UserProcess } from '@appTypes/state';
import { User } from '@appTypes/user';
import { checkAuthAction, loginAction, logoutAction } from '@store/api-actions';

const initialState: UserProcess = {
  authStatus: AuthStatus.NotAuth,
  user: null,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setAuthStatus: (state, action: PayloadAction<AuthStatus>) => {
      state.authStatus = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authStatus = AuthStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = AuthStatus.NotAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authStatus = AuthStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authStatus = AuthStatus.NotAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = AuthStatus.NotAuth;
      });
  }
});

export const { setAuthStatus, setUser } = userProcess.actions;