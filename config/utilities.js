import { Dimensions } from "react-native";

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