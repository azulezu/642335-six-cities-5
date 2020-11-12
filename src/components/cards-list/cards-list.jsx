import React from "react";
import PropTypes from "prop-types";
import OfferPropTypes from "../offer-page/offer.prop";
import Card from "../card/card";
import {SitePages, CardModificators} from "../../const";

const CardsList = (props) => {
  const {offers, sitePage} = props;

  const getCardFormat = (page) => {
    switch (page) {
      case SitePages.MAIN:
        return CardModificators.CITIES;
      case SitePages.OFFER:
        return CardModificators.NEAR;
      case SitePages.FAVORITES:
        return CardModificators.FAVORITES;
      default:
        return ``;
    }
  };

  const getContainerClassName = (modificator) => {
    switch (modificator) {
      case SitePages.MAIN:
        return `cities__places-list places__list tabs__content`;
      case SitePages.OFFER:
        return `near-places__list places__list`;
      case SitePages.FAVORITES:
        return `favorites__places`;
      default:
        return `places__list`;
    }
  };

  return (
    <div className={getContainerClassName(sitePage)}>
      {offers.map((offer) =>
        <Card
          key={offer.id}
          offer={offer}
          modificator={getCardFormat(sitePage)}
          {...props}
        />
      )}
    </div>
  );
};

CardsList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  sitePage: PropTypes.string.isRequired,
};

export default CardsList;
