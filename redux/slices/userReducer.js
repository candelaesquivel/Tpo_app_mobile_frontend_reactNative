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
    filterDistance : 0,
    filterRestaurantType : [],
    filterRating : 0,
    filterPriceRange : '',
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
      state.filterDistance = action.payload.distance,
      state.filterPriceRange = action.payload.priceRange,
      state.filterRestaurantType = action.payload.restaurantTypes,
      state.filterRating = action.payload.rating
    }
  }
});

export const {loginUser, logoutUser, selectRestaurant, selectDish, setSearchFilters} = userSlice.actions;

export default userSlice.reducer;