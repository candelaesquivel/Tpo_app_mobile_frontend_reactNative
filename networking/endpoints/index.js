// Auth
import { loginOwner  } from "./auth/loginOwner";
import { loginGoogle } from "./auth/loginGoogle";
import { recoverPassword } from "./auth/recoverPassword";
import {registerOwner} from "./auth/registerOwner";
import { verifyRecoverToken } from "./auth/verifyRecoverToken";

// Dishes
import { createDish } from "./dishes/createDish";
import { deleteDish } from "./dishes/deleteDish";
import {getDishesFromRestaurant} from "./dishes/getDishesFromRestaurant";
import {getDishData} from './dishes/getDishData';
import { updateDish } from "./dishes/updateDish";
import {uploadDishImg } from './dishes/uploadDishImg';

// Restaurants

// Reviews

export const authWS = {
  loginGoogle,
  loginOwner,
  recoverPassword,
  registerOwner,
  verifyRecoverToken,
};

export const dishesWS = {
  createDish,
  deleteDish,
  getDishesFromRestaurant,
  getDishData,
  updateDish,
  uploadDishImg,
};

export const restaurantWS = {

}