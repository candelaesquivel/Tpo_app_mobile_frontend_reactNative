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
    dishSelectedId : '',

    ///Filter
    filters : {
      maxDistance : 0,
      restaurantTypes : [],
      minRating : 0,
      priceRange : '',
    }
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

    selectDish(state, action){
      state.dishSelectedId = action.payload;
    },

    logoutUser(state, action){
      return defaultState;
    },

    setSearchFilters(state, action){
      state.filters.maxDistance = action.payload.maxDistance,
      state.filters.priceRange = action.payload.priceRange,
      state.filters.restaurantTypes = action.payload.restaurantTypes,
      state.filters.minRating = action.payload.minRating
    }
  }
});

export const {loginUser, logoutUser, selectRestaurant, selectDish, setSearchFilters} = userSlice.actions;

export default userSlice.reducer;