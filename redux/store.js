import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userReducer';
import feedbackReducer from './slices/feedBackReducer';

const store = configureStore({
  reducer : {
    user : userReducer,
    feedback : feedbackReducer,
  }
});

console.log(store.getState());

export default store