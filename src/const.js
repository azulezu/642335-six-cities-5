export const Styles = {
  DISPLAY_NONE: {
    display: `none`
  },
  WIDTH_100: {
    width: `100%`
  },
  HEIGHT_100: {
    height: `100%`
  },
};

export const MAX_RATING = 5;
export const MAX_DISPLAYED_REVIEWS = 10;

export const MapSetting = {
  CITY: [52.38333, 4.9],
  ZOOM: 12,
  ZOOM_CONTROL: false,
  ICON_URL: `img/pin.svg`,
  ACTIVE_ICON_URL: `img/pin-active.svg`,
  ICON_SIZE: [27, 39],
  TILE_LAYER: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  ATTRIBUTION: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
};

export const PlaceTypes = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`,
};

export const SitePages = {
  MAIN: `main-page`,
  OFFER: `offer-page`,
  FAVORITES: `favorites-page`,
};

export const CardModificators = {
  CITIES: `cities`,
  NEAR: `near-places`,
  FAVORITES: `favorites`,
};

export const CardImageSizes = {
  BIG: {
    width: `260`,
    height: `200`
  },
  SMALL: {
    width: `150`,
    height: `110`
  },
};

export const CitiesNames = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

export const SortOrders = {
  POPULAR: `POPULAR`,
  PRICE_ASC: `PRICE_ASC`,
  PRICE_DESC: `PRICE_DESC`,
  RATING: `RATING`,
};

export const SortOptionText = {
  POPULAR: `Popular`,
  PRICE_ASC: `Price: low to high`,
  PRICE_DESC: `Price: high to low`,
  RATING: `Top rated first`,
};

export const DEFAULT_ORDER = SortOrders.POPULAR;
