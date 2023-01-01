import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: '/',
  title: 'Home'
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload.page;
      state.title = action.payload.title;
    },
  },
})

export const { changePage } = pageSlice.actions
export default pageSlice.reducer