export const getUniqueId = () => Math.random().toString(36).slice(2, 9);

export const getUserData = (id: number | undefined) => {
  const data = localStorage.getItem(`userData${id}`);
  let userData;
  if (data !== null) {
    userData = JSON.parse(data);
  }
  return userData;
};

export const getDataProgress = (key: string) => {
  const data = localStorage.getItem(key);
  let dataProgress;
  if (data) {
    dataProgress = JSON.parse(data);
  }
  return dataProgress;
};
