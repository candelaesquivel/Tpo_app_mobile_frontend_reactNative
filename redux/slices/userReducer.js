import { createSlice } from "@reduxjs/toolkit";

const defaultState = 
{
    userId : '',
    token : '',
    email : '',
    userName : '',
    isLogged : false,
    role : '',
    userImg : '',
    restaurantSelectedId : '',
    dishSelectedId : ''
};

const userSlice = createSlice({
  name : 'user',
  initialState : defaultState,

  reducers : {
    login(state, action) {
      console.log('Payload Login: ', action.payload);
      state.userId = action.payload.id;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.isLogged = true;
    },

    selectRestaurant(state, action){
      state.restaurantSelectedId = action.payload;
    },

    logout(state, action){
      return defaultState;
    }
  }
});

export const {login, logout, selectRestaurant} = userSlice.actions;

export default userSlice.reducer;