import {MAX_RATING} from "./const";

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

// Вычисляет случайную дату в пределах пред. десятилетия
export const getDateWithinDecade = () => {
  const startDate = new Date();
  const decade = new Date(startDate.getFullYear() - 10, 0, 0);
  const diffValue = Math.random() * (startDate.getTime() - decade.getTime());
  return new Date(startDate.getTime() - diffValue);
};

export const convertRatingToStyle = (rating) => {
  return {width: Math.round(rating * 100 / MAX_RATING) + `%`};
};
