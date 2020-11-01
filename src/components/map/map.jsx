import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {OfferPropTypes} from "../app/app-prop-types";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {Styles, MapSetting} from "../../const";

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offers} = this.props;

    this._map = leaflet.map(`map-container`, {
      center: MapSetting.CITY,
      zoom: MapSetting.ZOOM,
      zoomControl: MapSetting.ZOOM_CONTROL,
      marker: true,
    });

    this._icon = leaflet.icon({
      iconUrl: MapSetting.ICON_URL,
      iconSize: MapSetting.ICON_SIZE,
    });

    this._map.setView(MapSetting.CITY, MapSetting.ZOOM);
    leaflet
      .tileLayer(MapSetting.TILE_LAYER, {
        attribution: MapSetting.ATTRIBUTION
      })
      .addTo(this._map);


    const icon = this._icon;
    for (const offer of offers) {
      leaflet
       .marker(offer.coords, {icon})
       .addTo(this._map);
    }
  }

  componentWillUnmount() {
    this._map = null;
    this._icon = null;
  }

  render() {
    // ❓
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
