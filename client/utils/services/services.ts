export const normalizeString = (string: string) => {
  const newSearchedValue = string.split(" ").join("-");
  return newSearchedValue;
};

export const unnormalizeString = (string: string) => {
  const newSearchedValue = string.split("-").join(" ");
  return newSearchedValue;
};
