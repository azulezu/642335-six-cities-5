import {CitiesNames} from "../const";

const CITIES_COORDS = [
  [48.856613, 2.352222],
  [50.936389, 6.952778],
  [50.85, 4.35],
  [52.38333, 4.9],
  [53.565278, 10.001389],
  [51.233333, 6.783333]
];

const cities = CitiesNames.map((name, index) => (
  {
    name,
    location: CITIES_COORDS[index],
  }
));

export default cities;
