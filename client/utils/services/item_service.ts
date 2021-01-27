import axios from "axios";
import config from "../config";

export async function getItemsResults(query: string) {
  return await axios
    .get(`${config.api_url}/items?q=${query}`)
    .then((json) => {
      return json.data;
    })
    .catch((error) => {
      return error;
    });
}

export async function getItemDetail(id: string | string[]) {
  return await axios
    .get(`${config.api_url}/items/${id}`)
    .then((json) => {
      return json.data;
    })
    .catch((error) => {
      return error;
    });
}
