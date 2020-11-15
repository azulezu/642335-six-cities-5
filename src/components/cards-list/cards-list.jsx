import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import OfferPropTypes from "../offer-page/offer.prop";
import Card from "../card/card";
import {SitePages, CardModificators} from "../../const";
import {sort} from "../../core";

const CardsList = (props) => {
  const {offers, sitePage, order} = props;

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
      {sort(offers, order).map((offer) =>
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
  order: PropTypes.string,
};

const mapStateToProps = (state) => ({
  order: state.order,
});

export {CardsList};
export default connect(mapStateToProps)(CardsList);
