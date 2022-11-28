import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";

export async function uploadRestaurantImg(restaurantId, pictures){
  
  const URL = URL_SERVICES.UPLOAD_RESTAURANT_IMAGE.replace('id', restaurantId);
  const formData = new FormData();

  console.log('Pictures: ', pictures);

  const imgData = {
    name : pictures[0].fileName,
    type : pictures[0].type,
    uri : pictures[0].uri
  }

  formData.append('file', imgData);

  try {
    const result = await axios({
      method: "post",
      url: URL,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  
   } catch (error) {
      console.log("ERROR:", error.response.data);
   }

}