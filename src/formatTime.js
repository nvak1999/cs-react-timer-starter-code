export const formatTime = (time) => {
  const getSeconds = time.getSeconds();
  const getMinutes = time.getMinutes();
  const getHours = time.getHours();

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
