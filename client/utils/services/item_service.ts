import axios from "axios";
import config from "../config";

export async function getItemsResults(query: string) {
  return await axios
    .get(`${config.api_url}/items?q=${query}`)
    .then((json) => {
      return { success: true, data: json.data };
    })
    .catch((error) => {
      return { success: false, data: error };
    });
}

export async function getItemDetail(id: string | string[]) {
  return await axios
    .get(`${config.api_url}/items/${id}`)
    .then((json) => {
      return { success: true, data: json.data };
    })
    .catch((error) => {
      return { success: false, data: error };
    });
}
