import { Dimensions } from "react-native";

export function convertGoogleAddress(details = {}) {
  
  const address = {
    streetNumber : details.address_components[0].long_name,
    streetName : details.address_components[1].long_name,
    neighborhood : details.address_components[2].long_name,
    city : details.address_components[3].long_name,
    state : details.address_components[5].long_name,
    country : details.address_components[6].long_name,
    zipCode : details.address_components[7].long_name,
  };

  return address;
};

export function convertGoogleRegion(details = {}){
  const newRegion = {
    latitude: details.geometry.location.lat,
    longitude: details.geometry.location.lng,
    latitudeDelta: details.geometry.viewport.northeast.lat - details.geometry.viewport.southwest.lat,
    longitudeDelta: (details.geometry.viewport.northeast.lat - details.geometry.viewport.southwest.lat) * (Dimensions.get('window').width / Dimensions.get('window').height),
  };

  return newRegion;
}