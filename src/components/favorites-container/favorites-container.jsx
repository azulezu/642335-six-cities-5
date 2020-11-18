import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const FavoritesContainer = (props) => {
  const {city} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link"
            to={`/`}
          >
            <span>{city}</span>
          </Link>
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
