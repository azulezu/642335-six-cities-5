import React from "react";
import PropTypes from "prop-types";
import {CitiesNames} from "../../const";

const CitiesList = (props) => {
  const {city} = props;

  const getTabsItemClassName = (currentCity) => (
    `locations__item-link tabs__item ${currentCity === city
      ? `tabs__item--active` : ``}`
  );

  return (
    <ul className="locations__list tabs__list">
      {CitiesNames.map((cityName) =>
        <li className="locations__item"
          key={cityName}
        >
          <a className={getTabsItemClassName(cityName)}
            href="#"
          >
            <span>{cityName}</span>
          </a>
        </li>
      )}
    </ul>
  );
};

CitiesList.propTypes = {
  city: PropTypes.string.isRequired,
};

export default CitiesList;
