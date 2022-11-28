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
    },

    showSuccessToast(state, action){
      state.status = 'success',
      state.message = action.payload
    },

    showErrorToast(state, action){
      state.status = 'error',
      state.message = action.payload
    },

    restoreToast(state, action){
      return defaultState;
    }
  }
});

export const {showToast, restoreToast, showErrorToast, showSuccessToast} = feedbackSlice.actions;

export default feedbackSlice.reducer;