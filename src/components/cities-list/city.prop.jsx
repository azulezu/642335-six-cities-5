import PropTypes from "prop-types";

const CityPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  location: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
});

export default CityPropTypes;
