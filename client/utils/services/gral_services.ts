export const normalizeString = (string: string) => {
  const newSearchedValue = string.split(" ").join("-");
  return newSearchedValue;
};

export const unnormalizeString = (string: string) => {
  const newSearchedValue = string.split("-").join(" ");
  return newSearchedValue;
};

export const formatItemPrice = (number: number) => {
  const removedDecimals = (number).toString().split('.')[0];
  return removedDecimals.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};
