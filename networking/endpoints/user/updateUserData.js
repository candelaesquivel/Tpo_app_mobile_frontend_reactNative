import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";

export async function updateUserData(userId, userData){

  const USER_URL = URL_SERVICES.UPDATE_USER_DATA.replace('id', userId);
  const IMG_URL = URL_SERVICES.UPLOAD_USER_IMAGE.replace('id', userId);

  const imgData = {
    name : userData.photo.fileName,
    type : userData.photo.type,
    uri : userData.photo.uri
  }

  const fileData = new FormData();
  fileData.append('file', imgData);

  return await Promise.all([
    await axios.patch(USER_URL, userData),
    await axios.post(IMG_URL, fileData, { headers : { "Content-Type": "multipart/form-data" }})
  ]).then(
    axios.spread(
      ({data : user}, {data : image}) => {
        console.log('User Response: ', user);
        console.log('Image Response: ', image);

        return image;
      })
  ).catch(err => {
    console.log( CONSTANTS.ERROR_MSGS.ERROR_MESSAGE, err.response.data);
  })
}