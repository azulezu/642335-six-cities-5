import {nanoid} from 'nanoid';
import {MAX_RATING} from "../const";
import {getRandomInteger, getRandomBoolean, getRandomArrayItem, getDateWithinDecade} from "../utils";
import getOffers from './offers';

const REVIEWS_COUNT = 50;

const USER_NAMES = [`Max`, `Mohamed`, `Mary`, `Matthew`, `Marcus`];
const TEXT_CONTENTS = [
  `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
];

const generateReview = ({offerId, cityName}) => {
  const id = `id` + nanoid();
  const avatar = `img/avatar-${getRandomBoolean() ? `max` : `angelina`}.jpg`;
  return {
    id,
    offerId,
    avatar,
    userName: getRandomArrayItem(USER_NAMES),
    rating: getRandomInteger(1, MAX_RATING),
    text: `From ${cityName}: ` + getRandomArrayItem(TEXT_CONTENTS),
    time: getDateWithinDecade(),
  };
};

const generateReviews = (offers) => {
  const offersIds = offers.map((offer) => (
    {offerId: offer.id, cityName: offer.city}
  ));

  return new Array(REVIEWS_COUNT)
    .fill(``)
    .map(() =>
      generateReview(getRandomArrayItem(offersIds))
    );
};

const reviews = generateReviews(getOffers());

export default () => reviews;
