/**
 * Archivo para formatear la data que llega de la api de mercado libre
 */

const author = {
  name: "Nicolas",
  lastname: "Baudon",
};

const cleanCategories = (categories: any) => {
  let result = [];
  if (categories) {
    result = categories.values[0].path_from_root.map(
      (category: any) => category.name
    );
  }
  return result;
};

const decimals = (price: number) => {
  const decimals = price.toString().split(".")[1];
  return decimals ? Number(decimals) : 0;
};

const cleanItem = (item: any, isDetail = false) => {
  const cleanedItem = {
    id: item.id,
    title: item.title,
    location: item.address?.city_name,
    price: {
      currency: item.currency_id,
      amount: item.price,
      decimals: decimals(item.price),
    },
    picture:
      item.pictures && item.pictures.length
        ? item.pictures[0].url
        : item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    sold_quantity: isDetail ? item.sold_quantity : undefined,
    description: undefined,
  };
  return cleanedItem;
};

export const prepareItemsResults = (data: any) => {
  const categories = cleanCategories(
    data.filters.find((filter: any) => filter.id === "category")
  );
  const items = data.results.map((item: any) => cleanItem(item));
  return { author, categories, items };
};

export const prepareItemDetail = (data: any) => {
  let item = cleanItem(data.itemResult, true);
  item = { ...item, description: data.itemDescription.plain_text };
  return { author, item };
};
