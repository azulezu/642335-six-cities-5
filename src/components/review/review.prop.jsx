import PropTypes from "prop-types";

const ReviewPropTypes = PropTypes.shape({
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  time: PropTypes.instanceOf(Date).isRequired,
});

export default ReviewPropTypes;
