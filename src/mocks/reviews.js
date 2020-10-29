import {MAX_RATING} from "../const";
import {getRandomInteger, getRandomBoolean, getRandomArrayItem} from "./utils";

const USER_NAMES = [`Max`, `Mohamed`, `Mary`, `Matthew`, `Marcus`];
const TEXT_CONTENT = `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`;

const generateReview = () => {
  const avatar = `img/avatar-${getRandomBoolean() ? `max` : `angelina`}.jpg`;
  return {
    offerId: ``,
    avatar,
    userName: getRandomArrayItem(USER_NAMES),
    rating: getRandomInteger(1, MAX_RATING),
    text: TEXT_CONTENT,
    time: new Date(),
  };
};

const generateReviews = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateReview);
};

export default generateReviews;
