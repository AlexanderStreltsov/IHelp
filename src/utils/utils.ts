export const getIsRequestImmediate = (date: string) => {
  return Number(new Date(date)) - Date.now() < 24 * 3600 * 1000;
};

export const getIsRequestFinished = (date: string) => {
  return Date.now() - Number(new Date(date)) > 24 * 3600 * 1000;
};
