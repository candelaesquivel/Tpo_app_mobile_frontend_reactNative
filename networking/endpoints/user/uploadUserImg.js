import axios from "axios";
import { CONSTANTS } from "../../../config";
import { URL_SERVICES } from "../../../config/config";

export async function uploadUserImg(userId, image){

  const URL = URL_SERVICES.UPLOAD_USER_IMAGE.replace('id', userId);

  let formData = new FormData();

  const imgData = {
    name : image.fileName,
    type : image.type,
    uri : image.uri
  }

  console.log(imgData);

  formData.append('file', imgData);

 try {
  const result = await axios({
    method: "post",
    url: URL,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });

 } catch (error) {
  console.log("ERROR:", error)
 }
}