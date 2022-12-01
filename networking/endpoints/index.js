// Auth
import { loginOwner  } from "./auth/loginOwner";
import { loginGoogle } from "./auth/loginGoogle";
import { recoverPassword } from "./auth/recoverPassword";
import {registerOwner} from "./auth/registerOwner";
import { verifyRecoverToken } from "./auth/verifyRecoverToken";

// User
import {getOwnerRestaurants} from './user/getOwnerRestaurants';
import {deleteAccount} from './user/deleteAccount';
import { getFavoriteRestaurants } from "./user/getFavoriteRestaurants";
import {changeRestaurantFavoriteStatus} from './user/changeRestaurantFavoriteStatus';
import {updateUserData} from './user/updateUserData';

// Dishes
import { createDish } from "./dishes/createDish";
import { deleteDish } from "./dishes/deleteDish";
import {getDishesFromRestaurant} from "./dishes/getDishesFromRestaurant";
import {getDishData} from './dishes/getDishData';
import { updateDish } from "./dishes/updateDish";

// Restaurants
import {getRestaurants} from './restaurant/getRestaurants';
import { createRestaurant } from "./restaurant/createRestaurant";
import {deleteRestaurant} from './restaurant/deleteRestaurant';
import {getRestaurantInfo} from './restaurant/getRestaurantInfo';
import { setCloseStatus } from "./restaurant/setCloseStatus";
import { updateRestaurant } from "./restaurant/updateRestaurant";

// Reviews
import {createReview} from './reviews/createReview';
import {getReviewsOfRestaurant} from './reviews/getReviewsOfRestaurant';

const authWS = {
  loginGoogle,
  loginOwner,
  recoverPassword,
  registerOwner,
  verifyRecoverToken,
};

const dishesWS = {
  createDish,
  deleteDish,
  getDishesFromRestaurant,
  getDishData,
  updateDish,
};

const restaurantWS = {
  getRestaurants,
  createRestaurant,
  deleteRestaurant,
  getRestaurantInfo,
  setCloseStatus,
  updateRestaurant,
};

const userWS = {
  getOwnerRestaurants,
  getFavoriteRestaurants,
  deleteAccount,
  changeRestaurantFavoriteStatus,
  updateUserData
};

const reviewWS = {
  createReview,
  getReviewsOfRestaurant,
};

export {authWS, dishesWS, restaurantWS, userWS, reviewWS};