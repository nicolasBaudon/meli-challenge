import axios from "axios";

import config from "../utils/config";

const axiosApiInstance = axios.create({
  baseURL: config.API_URL,
});

export const getItems = async (query: any) => {
  const results = await axiosApiInstance.get(
    `/sites/MLA/search?q=${query}&limit=4`
  );
  return results.data;
};

export const getItem = async (itemId: string) => {
  const itemResult = await axiosApiInstance.get(`items/${itemId}`);
  const itemDescription = await axiosApiInstance.get(
    `/items/${itemId}/description`
  );
  return { itemResult: itemResult.data, itemDescription: itemDescription.data };
};
