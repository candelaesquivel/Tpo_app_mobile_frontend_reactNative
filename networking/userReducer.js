import { REDUX_ACTIONS } from "../config";

const initialState = {
  session : {
    userId : '',
    token : '',
    userEmail : '',
    userName : '',
    isLogged : false
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
          isLogged : action.payload.isLogged
        }
      }
    }
    case REDUX_ACTIONS.USER_LOGOUT:{
      return initialState
    }
    default:
      return state;
  }
}