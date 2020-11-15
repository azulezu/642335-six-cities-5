import React from "react";
import PropTypes from "prop-types";

const FavoritesContainer = (props) => {
  const {city} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      {props.children}
    </li>
  );
};

FavoritesContainer.propTypes = {
  city: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default FavoritesContainer;
