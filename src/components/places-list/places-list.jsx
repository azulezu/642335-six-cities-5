import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {OfferPropTypes} from "../app/app-prop-types";

import PlaceCard from "../place-card/place-card";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activePlaceCard: null,
    };
    this._handlePlaceCardHover = this._handlePlaceCardHover.bind(this);
  }

  _handlePlaceCardHover(id) {
    this.setState({
      activePlaceCard: id,
    });
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) =>
          <PlaceCard
            key={offer.id}
            offer={offer}
            onHover={this._handlePlaceCardHover}
          />
        )}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
};

export default PlacesList;