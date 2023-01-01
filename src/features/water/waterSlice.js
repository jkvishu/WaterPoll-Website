import { createSlice } from '@reduxjs/toolkit';
import { water } from './water_data.js';

const initialState = {
    data: []
}

export const waterSlice = createSlice({
    name: 'water',
    initialState,
    reducers: {
        loads: (state) => {
            state.data = water;
        },

    },
})

export const { loads } = waterSlice.actions
export default waterSlice.reducer