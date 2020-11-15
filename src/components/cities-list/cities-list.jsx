import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {CitiesNames} from "../../const";

const CitiesList = (props) => {
  const {city, changeCity} = props;

  const onCityTabClick = (evt) => {
    evt.preventDefault();
    changeCity(evt.target.textContent);
  };

  return (
    <ul className="locations__list tabs__list">
      {CitiesNames.map((cityName) =>
        <li className="locations__item"
          key={cityName}
        >
          <a className={`locations__item-link tabs__item ${cityName === city
            ? `tabs__item--active` : ``}`}
          onClick={onCityTabClick}
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
  changeCity: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeCity(cityName) {
    dispatch(ActionCreator.changeCity(cityName));
  },
});

export {CitiesList};
export default connect(null, mapDispatchToProps)(CitiesList);
