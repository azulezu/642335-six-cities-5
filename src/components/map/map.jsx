import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferPropTypes from "../offer-page/offer.prop";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {Styles, MapSetting} from "../../const";
import cities from '../../mocks/cities';


class Map extends PureComponent {
  constructor(props) {
    super(props);
    // props.city - строка с названием
    // Map.city - объект с координатами и названием
    this.city = cities.find((city) => city.name === this.props.city);
  }

  componentDidMount() {
    this._initMap();
    this._drawMarkers();
  }

  componentDidUpdate() {
    this._drawMarkers();
  }

  componentWillUnmount() {
    this._map = null;
  }

  _initMap() {
    this._map = leaflet.map(`map-container`, {
      center: this.city.location,
      zoom: MapSetting.ZOOM,
      zoomControl: MapSetting.ZOOM_CONTROL,
      marker: true,
    });

    this._map.setView(this.city.location, MapSetting.ZOOM);
    leaflet
      .tileLayer(MapSetting.TILE_LAYER, {
        attribution: MapSetting.ATTRIBUTION
      })
      .addTo(this._map);
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
  activeOfferId: PropTypes.string,
  city: PropTypes.string.isRequired,
};

export default Map;
