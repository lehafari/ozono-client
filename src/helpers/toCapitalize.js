export const toCapitalize = (string) => {
  const capitalizeString =
    string &&
    string
      .trim()
      .toLowerCase()
      .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));

  return capitalizeString;
};
