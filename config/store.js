import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../networking/userReducer'

const store = configureStore({reducer : userReducer});

console.log(store.getState());

export default store