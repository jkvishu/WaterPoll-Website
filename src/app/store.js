import { configureStore } from '@reduxjs/toolkit';
import pageReducer from '../features/page/pageSlice';
import waterReducer from '../features/water/waterSlice';

export const store = configureStore({
  reducer: {
    page: pageReducer,
    water: waterReducer,
  },
})