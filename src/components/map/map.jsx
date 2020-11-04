import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {OfferPropTypes} from "../app/app-prop-types";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {Styles, MapSetting} from "../../const";

class Map extends PureComponent {

  componentDidMount() {
    this._map = leaflet.map(`map-container`, {
      center: MapSetting.CITY,
      zoom: MapSetting.ZOOM,
      zoomControl: MapSetting.ZOOM_CONTROL,
      marker: true,
    });

    this._map.setView(MapSetting.CITY, MapSetting.ZOOM);
    leaflet
      .tileLayer(MapSetting.TILE_LAYER, {
        attribution: MapSetting.ATTRIBUTION
      })
      .addTo(this._map);

    this._drawMarkers();
  }

  componentDidUpdate() {
    this._drawMarkers();
  }

  componentWillUnmount() {
    this._map = null;
  }

  _drawMarkers() {
    const {offers, activeOfferId} = this.props;

    for (const offer of offers) {
      const icon = leaflet.icon({
        iconUrl: (offer.id === activeOfferId) ? MapSetting.ACTIVE_ICON_URL
          : MapSetting.ICON_URL,
        iconSize: MapSetting.ICON_SIZE,
      });
      leaflet
       .marker(offer.coords, {icon})
       .addTo(this._map);
    }
  }

  render() {
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
  activeOfferId: PropTypes.string.isRequired,
};

export default Map;
