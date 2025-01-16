import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'showHide',
  initialState: {
    isShowHeader: false,
  },
  reducers: {
    showHeader: (state) => {
      state.isShowHeader = true;
    },
    hideHeader: (state) => {
      state.isShowHeader = false;
    },
  },
});


export const { showHeader, hideHeader } = authSlice.actions;

export default authSlice.reducer;
