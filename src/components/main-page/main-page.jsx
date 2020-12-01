import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import OfferPropTypes from "../offer-page/offer.prop";
import IconsSprite from "../icons-sprite/icons-sprite";
import CardsList from "../cards-list/cards-list";
import Map from "../map/map";
import Header from "../header/header";
import MainEmpty from "../main-empty//main-empty";
import CitiesList from "../cities-list/cities-list";
import SortingForm from "../sorting-form/sorting-form";
import {SitePages} from "../../const";
import {selectOffersByCity} from "../../store/selectors";
import withMapMarkers from "../../hocs/with-map-markers";
import withTransitHandler from "../../hocs/with-transit-handler";

const CardsListWrapped = withTransitHandler(CardsList);

const MainPage = (props) => {
  const {activeOfferId, onChangeActiveOffer} = props;
  const {offers, city} = props;
  const isEmpty = offers.length === 0;

  const mainClassName = `page__main page__main--index ${!isEmpty ? ``
    : `page__main--index-empty`}`;
  const containerClassName = `cities__places-container ${!isEmpty ? ``
    : `cities__places-container--empty`} container`;

  return (
    <React.Fragment>
      <IconsSprite />

      <div className="page page--gray page--main">

        <Header />

        <main className={mainClassName}>
          <h1 className="visually-hidden">Cities</h1>

          <div className="tabs">
            <section className="locations container">

              <CitiesList city={city} />

            </section>
          </div>


          <div className="cities">
            <div className={containerClassName}>

              {isEmpty ? <MainEmpty />
                : (
                  <React.Fragment>
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
                          cityName={city}
                        />
                      </section>
                    </div>
                  </React.Fragment>
                )
              }

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

const wrappedMainPage = withMapMarkers(MainPage);

const mapStateToProps = (state) => ({
  city: state.APP.city,
  offers: selectOffersByCity(state),
});

export {wrappedMainPage};
export default connect(mapStateToProps)(wrappedMainPage);
