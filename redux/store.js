import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userReducer';
import feedbackReducer from './slices/feedBackReducer';

const store = configureStore({
  reducer : {
    user : userReducer,
    feedback : feedbackReducer,
  }
});

export default store