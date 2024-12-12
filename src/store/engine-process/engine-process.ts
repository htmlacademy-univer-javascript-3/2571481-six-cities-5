import { Cities, City } from '@appTypes/city';
import { EngineProcess } from '@appTypes/state';
import { NameSpace } from '@const';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: EngineProcess = {
  city: Cities[0],
};

export const engineProcess = createSlice({
  name: NameSpace.Engine,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
  },
});

export const { changeCity } = engineProcess.actions;
