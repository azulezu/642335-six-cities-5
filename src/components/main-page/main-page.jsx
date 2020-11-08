import React from "react";
import PropTypes from "prop-types";
import {OfferPropTypes, CityPropTypes} from "../app/app-prop-types";
import IconsSprite from "../icons-sprite/icons-sprite";
import CardsList from "../cards-list/cards-list";
import Map from "../map/map";
import Header from "../header/header";
import CitiesList from "../cities-list/cities-list";
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

              <CitiesList city={city.name} />

            </section>
          </div>


          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {city.name}</b>

                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0">
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex="0">Popular</li>
                    <li className="places__option" tabIndex="0">Price: low to high</li>
                    <li className="places__option" tabIndex="0">Price: high to low</li>
                    <li className="places__option" tabIndex="0">Top rated first</li>
                  </ul>
                </form>

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
  city: CityPropTypes.isRequired,
};

export default withMapMarkers(MainPage);
