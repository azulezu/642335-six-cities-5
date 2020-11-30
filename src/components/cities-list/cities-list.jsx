import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";


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
    const {city, cityNames} = this.props;
    return (
      <ul className="locations__list tabs__list">
        {cityNames.map((cityName) =>
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
  cityNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  cityNames: state.cities.map((item) => item.name),
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(cityName) {
    dispatch(ActionCreator.changeCity(cityName));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
