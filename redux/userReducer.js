import REDUX_ACTIONS from '../redux/actions_names';

const initialState = {
  session : {
    userId : '',
    token : '',
    email : '',
    userName : '',
    isLogged : false,
    role : '',
    restaurantSelectedId : '',
    dishSelectedId : ''
  }
}


export default function userReducer(state = initialState, action){

  console.log(state);
  console.log(action);

  switch (action.type)
  {
    case REDUX_ACTIONS.USER_LOGIN:{
      return {
        ...state,
        session : {
          userId : action.payload.userId,
          token : action.payload.token,
          email : action.payload.email,
          userName : action.payload.userName,
          isLogged : action.payload.isLogged,
          role : action.payload.role,
          restaurantSelectedId : '',
          dishSelectedId : ''
        }
      }
    }
    case REDUX_ACTIONS.USER_DATA_UPDATED:{
      return {
        ...state,
        session : {
          ...state.session,
          userName : action.payload.userName,
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
          ...state.session,
          restaurantSelectedId : action.payload.restaurantId,
        }
      }
    }
    case REDUX_ACTIONS.USER_UNSELECT_RESTAURANT:{
      return {
        ...state,
        session : {
          ...state.session,
          restaurantSelectedId : ''
        }
      }
    }
    case REDUX_ACTIONS.USER_UNSELECT_DISH:{
      return {
        ...state,
        session : {
          ...state.session,
          dishSelectedId : '',
        }
      }
    }
    case REDUX_ACTIONS.USER_SELECT_DISH:{
      return {
        ...state,
        session : {
          ...state.session,
          dishSelectedId : action.payload.dishId,
        }
      }
    }
    default:
      return state;
  }
}