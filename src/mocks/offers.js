import {MAX_RATING} from "../const";
import {getRandomInteger, getRandomBoolean, getRandomArrayItem, getRandomItems} from "./utils";

const GALLERY_LENGTH = 6;
const MAX_PHOTO = 3;
const MAX_BEDROOMS = 3;
const MAX_ADULTS = 5;
const MIN_PRICE = 30;
const MAX_PRICE = 200;
const HOST_NAMES = [`Angelina`, `Alex`, `Anne`, `Andrew`];
const PLACE_TYPES = [`Apartment`, `Private room`];
const PLACE_NAMES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `White castle`,
  `Beautiful & luxurious studio at great location`,
];
const INSIDE_ITEMS = [
  `Wi-Fi`,
  `Washing machine`,
  `Towels`,
  `Heating`,
  `Coffee machine`,
  `Baby seat`,
  `Kitchen`,
  `Dishwasher`,
  `Cabel TV`,
  `Fridge`,
];
const TEXT_CONTENTS = [
  `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
];

const generateOffer = () => {
  const images = new Array(GALLERY_LENGTH)
    .fill(`img/apartment-${getRandomInteger(1, MAX_PHOTO)}.jpg`);
  const avatar = `img/avatar-${getRandomBoolean() ? `max` : `angelina`}.jpg`;
  return {
    images,
    name: getRandomArrayItem(PLACE_NAMES),
    isBookmarked: getRandomBoolean(),
    rating: getRandomInteger(1, MAX_RATING),
    type: getRandomArrayItem(PLACE_TYPES),
    bedrooms: getRandomInteger(1, MAX_BEDROOMS),
    adults: getRandomInteger(1, MAX_ADULTS),
    price: getRandomInteger(MIN_PRICE, MAX_PRICE),
    insideItems: getRandomItems(INSIDE_ITEMS),
    host: {
      avatar,
      userName: getRandomArrayItem(HOST_NAMES),
    },
    description: TEXT_CONTENTS,
  };
};

const generateOffers = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateOffer);
};

export default generateOffers;
