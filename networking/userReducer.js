import { REDUX_ACTIONS } from "../config";

const initialState = {
  session : {
    userId : '',
    token : '',
    userEmail : '',
    userName : '',
    isLogged : false,
    role : '',
    restaurantSelected : '',
    dishSelected : ''
  }
}


export default function userReducer(state = initialState, action){

  console.log(action);

  switch (action.type)
  {
    case REDUX_ACTIONS.USER_LOGIN:{
      console.log("On Login Action")
      return {
        ...state,
        session : {
          userId : action.payload.userId,
          token : action.payload.token,
          userEmail : action.payload.userEmail,
          userName : action.payload.userName,
          isLogged : action.payload.isLogged,
          role : action.payload.role
        }
      }
    }
    case REDUX_ACTIONS.USER_LOGOUT:{
      return initialState
    }
    case REDUX_ACTIONS.USER_SELECT_RESTAURANT:{
      return {
        ...state,
        session : {
          restaurantSelected : action.payload.restaurantId,
        }
      }
    }
    case REDUX_ACTIONS.USER_SELECT_DISH:{
      return {
        ...state,
        session : {
          dishSelected : action.payload.dishId,
        }
      }
    }
    default:
      return state;
  }
}