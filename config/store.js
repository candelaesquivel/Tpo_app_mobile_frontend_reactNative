import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/userReducer';

const store = configureStore({reducer : userReducer});

console.log(store.getState());

export default store