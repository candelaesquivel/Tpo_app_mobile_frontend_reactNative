import REDUX_ACTIONS from './actions_names';

export function unselectRestaurantAction(){
  return {
    type : REDUX_ACTIONS.USER_UNSELECT_RESTAURANT
  };
}

export function unselectDishAction(){
  return {
    type : REDUX_ACTIONS.USER_UNSELECT_DISH
  }
}
export function logoutUserAction(){
  return {
    type : REDUX_ACTIONS.USER_LOGOUT,
  }
}

export function updateUserDataAction(userData){
  return {
    type : REDUX_ACTIONS.USER_DATA_UPDATED,
    payload : userData
  }
}

export function restaurantSelectedAction(restaurantId){
  return {
    type : REDUX_ACTIONS.USER_SELECT_RESTAURANT,
    payload : {
      restaurantId : restaurantId
    },
  }
}

export function dishSelectedAction(dishId){
  return {
    type : REDUX_ACTIONS.USER_SELECT_DISH,
    payload : {
      dishId : dishId
    },
  }
}

export function loginUserAction(userData){
  return {
    type : REDUX_ACTIONS.USER_LOGIN,
    payload : {
      userId : userData.id,
      email : userData.email,
      token : userData.accessToken,
      userName : userData.name,
      userImg : userData.photo,
      isLogged : true,
      role : userData.role,
    }
  }
}
