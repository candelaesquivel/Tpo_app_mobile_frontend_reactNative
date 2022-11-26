import { createSlice } from "@reduxjs/toolkit";

const defaultState = 
{
    status : 'info',
    title : '',
    message : '',
    duration : 1000,
};

const feedbackSlice = createSlice({
  name : 'feedback',
  initialState : defaultState,

  reducers : {
    showToast(state, action){
      state.status = action.payload.status,
      state.title = action.payload.title,
      state.message = action.payload.message
      return state;
    },

    restoreToast(state, action){
      return defaultState;
    }
  }
});

export const {showToast, restoreToast} = feedbackSlice.actions;

export default feedbackSlice.reducer;