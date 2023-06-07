export const getIsRequestImmediate = (date: string) => {
  return (
    Number(new Date(date)) - Date.now() < 24 * 3600 * 1000 &&
    Date.now() < Number(new Date(date))
  );
};

export const getIsDeadlinePassed = (date: string) => {
  return Date.now() > Number(new Date(date));
};
