import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferPropTypes from "../components/offer-page/offer.prop";
import {connect} from "react-redux";
import {ActionCreator} from "../store/action";


const withToggleBookmark = (Component) => {
  class ToggleBookmark extends PureComponent {
    constructor(props) {
      super(props);
      this.handlerBookmarkClick = this.handlerBookmarkClick.bind(this);
      this.toggleBookmark = props.toggleBookmark;

    }

    handlerBookmarkClick() {
      this.toggleBookmark(this.props.offer);
    }

    render() {
      return <Component
        {...this.props}
        onBookmarkClick={this.handlerBookmarkClick}
      />;
    }
  }

  ToggleBookmark.propTypes = {
    toggleBookmark: PropTypes.func.isRequired,
    offer: OfferPropTypes,
  };

  const mapDispatchToProps = (dispatch) => ({
    toggleBookmark(offer) {
      dispatch(ActionCreator.toggleBookmark(offer));
    },
  });

  return connect(null, mapDispatchToProps)(ToggleBookmark);
};

export default withToggleBookmark;
