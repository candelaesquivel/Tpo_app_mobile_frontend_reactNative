import { Dimensions } from "react-native";
import CONSTANTS from './constants';

export function convertGoogleAddress(details = undefined) {

  if (!details)
    return {};
  
  const address = {
    streetNumber : details.address_components[0].long_name,
    streetName : details.address_components[1].long_name,
    neighborhood : details.address_components[2].long_name,
    city : details.address_components[3].long_name,
    state : details.address_components[5].long_name,
    country : details.address_components[6].long_name,
    zipCode : details.address_components[7] ? details.address_components[7].long_name : 'CP0000',
  };

  return address;
};

export function getBase64Uri(img){

  if (img.uri && !img.base64)
    return `data:${img.type};base64,${img.uri}`;
  else{
    return `data:${img.type};base64,${img.base64}`;
  }
}

export function convertGoogleRegion(details = undefined){
  if (!details)
    return {};
    
  const newRegion = {
    latitude: details.geometry.location.lat,
    longitude: details.geometry.location.lng,
    latitudeDelta: details.geometry.viewport.northeast.lat - details.geometry.viewport.southwest.lat,
    longitudeDelta: (details.geometry.viewport.northeast.lat - details.geometry.viewport.southwest.lat) * (Dimensions.get('window').width / Dimensions.get('window').height),
  };

  return newRegion;
}

export function getHttpCodeMessage(statusCode = 0, endpointType){

  console.log('Status Code: ', statusCode);

  let messages = [];

  switch (endpointType){

    case CONSTANTS.ENPOINT_TYPE.LOGIN_GOOGLE:{

      messages = [
        {status : 200, msg : CONSTANTS.ERROR_MSGS.LOGIN_ACCOUNT},
        {status : 201, msg : CONSTANTS.ERROR_MSGS.REGISTER_ACCOUNT},
        {status : 500, msg : CONSTANTS.ERROR_MSGS.SERVER_ERROR},
      ]

      break
    }

    case CONSTANTS.ENPOINT_TYPE.LOGOUT:{

      messages = [
        {status : 200, msg : CONSTANTS.ERROR_MSGS.LOGOUT_ACCOUNT},
        {status : 401, msg : CONSTANTS.ERROR_MSGS.NOT_AUTHORIZED},
        {status : 500, msg : CONSTANTS.ERROR_MSGS.SERVER_ERROR},
      ]
      break

    }

    case CONSTANTS.ENPOINT_TYPE.DELETE_USER:{

      messages = [
        {status : 200, msg : CONSTANTS.ERROR_MSGS.DELETE_ACCOUNT},
        {status : 401, msg : CONSTANTS.ERROR_MSGS.NOT_AUTHORIZED},
        {status : 404, msg : CONSTANTS.ERROR_MSGS.USER_NOT_FOUND},
        {status : 500, msg : CONSTANTS.ERROR_MSGS.SERVER_ERROR},
      ]

      break

    }

    case CONSTANTS.ENPOINT_TYPE.UPDATE_USER:{

      const messages = [
        {status : 200, msg : CONSTANTS.ERROR_MSGS.USER_UPDATED_MSG},
        {status : 404, msg : CONSTANTS.ERROR_MSGS.USER_NOT_FOUND},
        {status : 401, msg : CONSTANTS.ERROR_MSGS.NOT_AUTHORIZED},
        {status : 500, msg : CONSTANTS.ERROR_MSGS.SERVER_ERROR},
      ]

      break
    }
  


  case CONSTANTS.ENPOINT_TYPE.CREATE_DISH:{

    const messages = [
      {status : 201, msg : CONSTANTS.ERROR_MSGS.DISH_CREATE},
      {status : 401, msg : CONSTANTS.ERROR_MSGS.NOT_AUTHORIZED},
      {status : 500, msg : CONSTANTS.ERROR_MSGS.DISH_CREATE_ERROR},

    ]

    break
  }

  case CONSTANTS.ENPOINT_TYPE.GET_RESTAURANT_DISHES:{

    const messages = [
      {status : 401, msg : CONSTANTS.ERROR_MSGS.NOT_AUTHORIZED},
      {status : 500, msg : CONSTANTS.ERROR_MSGS.DISH_CREATE_ERROR},

    ]

    break
  }

  case CONSTANTS.ENPOINT_TYPE.GET_DISH_DETAIL:{

    const messages = [
      
      {status : 401, msg : CONSTANTS.ERROR_MSGS.NOT_AUTHORIZED},
      {status : 500, msg : CONSTANTS.ERROR_MSGS.SERVER_ERROR},

    ]

    break
  }

  case CONSTANTS.ENPOINT_TYPE.DELETE_DISH:{

    const messages = [
      {status : 200, msg : CONSTANTS.ERROR_MSGS.DELETE_DISH},
      {status : 401, msg : CONSTANTS.ERROR_MSGS.NOT_AUTHORIZED},
      {status : 500, msg : CONSTANTS.ERROR_MSGS.DELETE_DISH_ERROR},

    ]

    break
  }

  case CONSTANTS.ENPOINT_TYPE.UPDATE_DISH:{

    const messages = [
      {status : 200, msg : CONSTANTS.ERROR_MSGS.MODIFY_DATA_DISH},
      {status : 401, msg : CONSTANTS.ERROR_MSGS.NOT_AUTHORIZED},
      {status : 500, msg : CONSTANTS.ERROR_MSGS.MODIFY_DATA_DISH_ERROR},

    ]

    break
  }}

  for (let index = 0; index < messages.length; index++) {
    const element = messages[index];

    if (element.status === statusCode)
      return element.msg;
  }

  return undefined;
  }