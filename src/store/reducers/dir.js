import {createSlice} from '@reduxjs/toolkit';

const language = localStorage.getItem('locale') || 'en';
const initialState = {
  dir: language == 'fa' ? 'rtl' : 'ltr',
};

const dirReducer = createSlice({
  name: 'dir',
  initialState,
  reducers: {
    changeDir: (state, {payload}) => {
      const lang = payload;
      localStorage.setItem('lang', lang);
      state.dir = lang == 'fa' ? 'rtl' : 'ltr';
      console.log("hi",state.dir);
    },
  },
});

export const {changeDir} = dirReducer.actions;

export default dirReducer.reducer;
