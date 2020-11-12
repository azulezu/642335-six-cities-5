import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {CitiesNames} from "../../const";

const CitiesList = (props) => {
  const {city, changeCity, selectOffers} = props;

  const onCityTabClick = (evt) => {
    evt.preventDefault();
    changeCity(evt.currentTarget.dataset.city);
    selectOffers();
  };

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
            onClick={onCityTabClick}
            data-city={cityName}
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
  selectOffers: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  selectOffers() {
    dispatch(ActionCreator.selectOffers());
  },
  changeCity(cityName) {
    dispatch(ActionCreator.changeCity(cityName));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
