import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferPropTypes from "../components/offer-page/offer.prop";
import {connect} from "react-redux";
import {ActionCreator} from "../store/action";


const withToggleBookmark = (Component) => {
  class ToggleBookmark extends PureComponent {
    constructor(props) {
      super(props);
      this._BookmarkHandler = this._BookmarkHandler.bind(this);
      this._toggleBookmark = props.toggleBookmark;

      ToggleBookmark.propTypes = {
        toggleBookmark: PropTypes.func,
      };
    }

    _BookmarkHandler() {
      this._toggleBookmark(this.props.offer);
    }

    render() {
      return <Component
        {...this.props}
        onBookmarkClick={this._BookmarkHandler}
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

  const extendedToggleBookmark = connect(null, mapDispatchToProps)(ToggleBookmark);

  return extendedToggleBookmark;
};

export default withToggleBookmark;
