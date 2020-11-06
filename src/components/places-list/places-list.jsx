import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {OfferPropTypes} from "../app/app-prop-types";
import PlaceCard from "../place-card/place-card";
import PlaceCardCities from "../place-card-cities/place-card-cities";
import PlaceCardNear from "../place-card-near/place-card-near";
import PlaceCardFavorite from "../place-card-favorite/place-card-favorite";
import {sitePages} from "../../const";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this._handlePlaceCardHover = this._handlePlaceCardHover.bind(this);
  }

  _handlePlaceCardHover(id) {
    const {onChangeActiveOffer} = this.props;
    // ❓
    // Не очень нравится это место, т.к. обработчик
    // может и не передаваться - не везде выше
    // нужна карта с отслеживанием активной карточки
    //
    if (onChangeActiveOffer) {
      onChangeActiveOffer(id);
    }
  }

  render() {
    const {offers, sitePage} = this.props;

    const getComponentByPage = (page, offer) => {
      switch (page) {
        case sitePages.MAIN:
          return (
            <PlaceCardCities
              key={offer.id}
              offer={offer}
              onHover={this._handlePlaceCardHover}
            />
          );
        case sitePages.OFFER:
          return (
            <PlaceCardNear
              key={offer.id}
              offer={offer}
              onHover={this._handlePlaceCardHover}
            />
          );
        case sitePages.FAVORITES:
          return (
            <PlaceCardFavorite
              key={offer.id}
              offer={offer}
              // 🚯
              // не нужен, сейчас как заглушка
              onHover={this._handlePlaceCardHover}
            />
          );
      }
      return (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onHover={this._handlePlaceCardHover}
        />
      );
    }; // getComponentByPage

    const getContainerClassName = (modificator) => {
      switch (modificator) {
        case sitePages.MAIN:
          return `cities__places-list places__list tabs__content`;
        case sitePages.OFFER:
          return `near-places__list places__list`;
        case sitePages.FAVORITES:
          return `favorites__places`;
      }
      return `places__list`;
    };

    return (
      <div className={getContainerClassName(sitePage)}>
        {offers.map((offer) =>
          getComponentByPage(sitePage, offer)
        )}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  onChangeActiveOffer: PropTypes.func,
  sitePage: PropTypes.string.isRequired,
};

export default PlacesList;
