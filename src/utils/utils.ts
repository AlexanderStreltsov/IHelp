export const getIsRequestImmediate = (date: string) => {
  return Number(new Date(date)) - Date.now() < 24 * 3600 * 1000;
};
