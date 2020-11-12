import React from "react";
import PropTypes from "prop-types";
import OfferPropTypes from "../offer-page/offer.prop";
import IconsSprite from "../icons-sprite/icons-sprite";
import CardsList from "../cards-list/cards-list";
import Map from "../map/map";
import Header from "../header/header";
import CitiesList from "../cities-list/cities-list";
import SortingForm from "../sorting-form/sorting-form";
import {SitePages} from "../../const";
import withMapMarkers from "../../hocs/with-map-markers";
import withTransitHandler from "../../hocs/with-transit-handler";

const CardsListWrapped = withTransitHandler(CardsList);

const MainPage = (props) => {
  const {activeOfferId, onChangeActiveOffer} = props;
  const {offers, city} = props;

  return (
    <React.Fragment>
      <IconsSprite />

      <div className="page page--gray page--main">

        <Header />

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>

          <div className="tabs">
            <section className="locations container">

              <CitiesList city={city} />

            </section>
          </div>


          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {city}</b>

                <SortingForm />

                <CardsListWrapped
                  offers={offers}
                  onEvent={onChangeActiveOffer}
                  sitePage={SitePages.MAIN}
                />
              </section>

              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    offers={offers}
                    activeOfferId={activeOfferId}
                    city={city}
                  />
                </section>
              </div>

            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};


MainPage.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  activeOfferId: PropTypes.string,
  onChangeActiveOffer: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
};

export default withMapMarkers(MainPage);
