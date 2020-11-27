import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {CitiesNames} from "../../const";


class CitiesList extends PureComponent {
  constructor(props) {
    super(props);

    this._handleCityTabClick = this._handleCityTabClick.bind(this);
  }

  _handleCityTabClick(evt) {
    evt.preventDefault();
    this.props.changeCity(evt.target.textContent);
  }


  render() {
    const {city} = this.props;

    return (
      <ul className="locations__list tabs__list">
        {CitiesNames.map((cityName) =>
          <li className="locations__item"
            key={cityName}
          >
            <Link
              className={`locations__item-link tabs__item ${cityName === city
                ? `tabs__item--active` : ``}`}
              onClick={this._handleCityTabClick}
              to={`/`}
            >
              <span>{cityName}</span>
            </Link>
          </li>
        )}
      </ul>
    );
  }
}


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
