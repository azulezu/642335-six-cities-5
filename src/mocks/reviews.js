import {nanoid} from 'nanoid';
import {MAX_RATING} from "../const";
import {getRandomInteger, getRandomBoolean, getRandomArrayItem, getDateWithinDecade} from "../utils";

const USER_NAMES = [`Max`, `Mohamed`, `Mary`, `Matthew`, `Marcus`];
const TEXT_CONTENTS = [
  `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
];

const generateReview = () => {
  const id = `id` + nanoid();
  const avatar = `img/avatar-${getRandomBoolean() ? `max` : `angelina`}.jpg`;
  return {
    id,
    offerId: ``,
    avatar,
    userName: getRandomArrayItem(USER_NAMES),
    rating: getRandomInteger(1, MAX_RATING),
    text: getRandomArrayItem(TEXT_CONTENTS),
    time: getDateWithinDecade(),
  };
};

const generateReviews = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateReview);
};

export default generateReviews;
