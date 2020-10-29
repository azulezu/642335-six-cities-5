export const getRandomInteger = (min, max) => {
  return min + Math.floor((max - min + 1) * Math.random());
};

export const getRandomBoolean = () => {
  return (Math.random() > 0.5);
};

export const getRandomArrayItem = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);
  return array[randomIndex];
};

export const getRandomItems = (array) => {
  const sampleItems = array.slice().sort(() => Math.random() - 0.5);
  return sampleItems.slice(0, getRandomInteger(1, array.length - 1));
};
