import {nanoid} from 'nanoid';
import {MAX_RATING, PlaceTypes, CitiesNames} from "../const";
import {getRandomInteger, getRandomBoolean, getRandomArrayItem, getRandomItems} from "../utils";

const GALLERY_LENGTH = 6;
const MAX_PHOTO = 3;
const MAX_BEDROOMS = 3;
const MAX_ADULTS = 5;
const MIN_PRICE = 30;
const MAX_PRICE = 200;
const HOST_NAMES = [`Angelina`, `Alex`, `Anne`, `Andrew`];
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

const CITIES_COORDS = [
  [48.856613, 2.352222],
  [50.936389, 6.952778],
  [50.85, 4.35],
  [52.38333, 4.9],
  [53.565278, 10.001389],
  [51.233333, 6.783333]
];

const getRandomCoords = ([latitude, longitude]) => {
  const SCALE = 0.001;
  const DISTANCE = 30;
  return [
    latitude + SCALE * getRandomInteger(-DISTANCE, DISTANCE),
    longitude + SCALE * getRandomInteger(-DISTANCE, DISTANCE),
  ];
};

const generateOffer = (city) => {
  const images = new Array(getRandomInteger(1, GALLERY_LENGTH))
    .fill(`img/apartment-0`)
    .map((src) => src + getRandomInteger(1, MAX_PHOTO) + `.jpg`);
  const id = `id` + nanoid();
  const avatar = `img/avatar-${getRandomBoolean() ? `max` : `angelina`}.jpg`;
  return {
    id,
    images,
    name: getRandomArrayItem(PLACE_NAMES),
    isMarked: getRandomBoolean(),
    isBookmarked: getRandomBoolean(),
    rating: getRandomInteger(1, MAX_RATING),
    type: getRandomArrayItem(Object.keys(PlaceTypes)),
    bedrooms: getRandomInteger(1, MAX_BEDROOMS),
    adults: getRandomInteger(1, MAX_ADULTS),
    price: getRandomInteger(MIN_PRICE, MAX_PRICE),
    insideItems: getRandomItems(INSIDE_ITEMS),
    host: {
      avatar,
      userName: getRandomArrayItem(HOST_NAMES),
    },
    description: TEXT_CONTENTS,
    city,
    coords: getRandomCoords(city.location),
  };
};

const generateOffers = (maxCount) => {
  const cities = CitiesNames.map((name, index) => (
    {
      name,
      location: CITIES_COORDS[index],
    }
  ));
  return new Array(getRandomInteger(1, maxCount))
    .fill(``)
    .map(() => generateOffer(getRandomArrayItem(cities)));
};

export default generateOffers;
