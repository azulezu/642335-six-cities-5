import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import OfferPropTypes from "../offer-page/offer.prop";
import CityPropTypes from "../cities-list/city.prop";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {Styles, MapSetting} from "../../const";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    // Map.city - объект {name: `city`, location: [latitude, longitude]}
    this.city = props.cities.find((city) => city.name === this.props.cityName);
  }

  componentDidMount() {
    this._initMap();
    this._drawMarkers();
  }

  componentDidUpdate() {
    if (this.city && this.city.name !== this.props.cityName) {
      this.city = this.props.cities.find((city) => city.name === this.props.cityName);
      this._map.remove();
      this._initMap();
    }
    this._drawMarkers();
  }

  componentWillUnmount() {
    this._map.remove();
    this._map = null;
  }

  _initMap() {
    this._map = leaflet.map(`map-container`, {
      center: this.city.location,
      zoom: this.city.zoom,
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
  cities: PropTypes.arrayOf(CityPropTypes).isRequired,
  activeOfferId: PropTypes.string,
  cityName: PropTypes.string.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  cities: DATA.cities,
});

export {Map};
export default connect(mapStateToProps)(Map);
