import PropTypes from "prop-types";

export const OfferPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired),
  name: PropTypes.string.isRequired,
  isMarked: PropTypes.bool.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  adults: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  insideItems: PropTypes.arrayOf(PropTypes.string.isRequired),
  host: {
    avatar: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
  }.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
});

export const ReviewPropTypes = PropTypes.shape({
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  time: PropTypes.instanceOf(Date).isRequired,
});