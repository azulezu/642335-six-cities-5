import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {OfferPropTypes} from "../app/app-prop-types";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {Styles} from "../../const";

class Map extends PureComponent {
  componentDidMount() {
    this._map = leaflet.map(`map-container`);
  }

  componentWillUnmount() {
    this._map = null;
  }

  render() {
    // const style = {...Styles.WIDTH_100, ...Styles.HEIGHT_100};
    const style = Object.assign({}, Styles.WIDTH_100, Styles.HEIGHT_100);
    return (
      <div id="map-container"
        style={style}
      ></div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
};

export default Map;
