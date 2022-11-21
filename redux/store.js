import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userReducer';

const store = configureStore({
  reducer : {
    user : userReducer,
  }
});

console.log(store.getState());

export default store