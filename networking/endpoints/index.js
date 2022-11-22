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

// Dishes
import { createDish } from "./dishes/createDish";
import { deleteDish } from "./dishes/deleteDish";
import {getDishesFromRestaurant} from "./dishes/getDishesFromRestaurant";
import {getDishData} from './dishes/getDishData';
import { updateDish } from "./dishes/updateDish";
import {uploadDishImg } from './dishes/uploadDishImg';

// Restaurants

// Reviews

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

};

const userWS = {
  getOwnerRestaurants,
  getFavoriteRestaurants,
  deleteAccount,
};

const reviewWS = {

};

export {authWS, dishesWS, restaurantWS, userWS};