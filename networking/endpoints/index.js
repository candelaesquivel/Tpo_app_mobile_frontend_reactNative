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
import {uploadUserImg} from './user/uploadUserImg';
import {updateUserData} from './user/updateUserData';

// Dishes
import { createDish } from "./dishes/createDish";
import { deleteDish } from "./dishes/deleteDish";
import {getDishesFromRestaurant} from "./dishes/getDishesFromRestaurant";
import {getDishData} from './dishes/getDishData';
import { updateDish } from "./dishes/updateDish";
import {uploadDishImg } from './dishes/uploadDishImg';

// Restaurants
import {getRestaurants} from './restaurant/getRestaurants';
import { createRestaurant } from "./restaurant/createRestaurant";
import {deleteRestaurant} from './restaurant/deleteRestaurant';
import {getRestaurantInfo} from './restaurant/getRestaurantInfo';
import { setCloseStatus } from "./restaurant/setCloseStatus";
import { updateRestaurant } from "./restaurant/updateRestaurant";
import { uploadRestaurantImg } from "./restaurant/uploadRestaurantImg";

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
  uploadDishImg,
};

const restaurantWS = {
  getRestaurants,
  createRestaurant,
  deleteRestaurant,
  getRestaurantInfo,
  setCloseStatus,
  updateRestaurant,
  uploadRestaurantImg,
};

const userWS = {
  getOwnerRestaurants,
  getFavoriteRestaurants,
  deleteAccount,
  changeRestaurantFavoriteStatus,
  uploadUserImg,
  updateUserData
};

const reviewWS = {
  createReview,
  getReviewsOfRestaurant,
};

export {authWS, dishesWS, restaurantWS, userWS, reviewWS};