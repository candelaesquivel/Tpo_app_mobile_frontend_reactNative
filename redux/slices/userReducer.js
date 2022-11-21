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
    loginUser(state, action) {
      state.token = action.payload.token;
      state.userImg = action.payload.userImg;
      state.userName = action.payload.name;
      state.userId = action.payload.id;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.isLogged = true;
      state.restaurantSelectedId = '';
      state.dishSelectedId = '';
    },

    selectRestaurant(state, action){
      state.restaurantSelectedId = action.payload;
    },

    logoutUser(state, action){
      return defaultState;
    }
  }
});

export const {loginUser, logoutUser, selectRestaurant} = userSlice.actions;

export default userSlice.reducer;