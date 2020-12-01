import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import OfferPropTypes from "../components/offer-page/offer.prop";
import {connect} from "react-redux";
import {ActionCreator} from "../store/action";


const withToggleBookmark = (Component) => {
  class ToggleBookmark extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isMustRedirect: false,
      };

      this.handlerBookmarkClick = this.handlerBookmarkClick.bind(this);
      this.toggleBookmark = props.toggleBookmark;
    }

    handlerBookmarkClick() {
      if (!this.props.isAuthorized) {
        this.setState({
          isMustRedirect: true,
        });
      } else {
        this.setState({
          isMustRedirect: false,
        });
        this.toggleBookmark(this.props.offer);
      }
    }

    render() {
      if (this.state.isMustRedirect) {
        return <Redirect to="/login" />;
      }

      return <Component
        {...this.props}
        onBookmarkClick={this.handlerBookmarkClick}
      />;
    }
  }

  ToggleBookmark.propTypes = {
    toggleBookmark: PropTypes.func.isRequired,
    offer: OfferPropTypes,
    isAuthorized: PropTypes.bool.isRequired,
  };

  const mapStateToProps = ({APP}) => ({
    isAuthorized: APP.isAuthorized,
  });

  const mapDispatchToProps = (dispatch) => ({
    toggleBookmark(offer) {
      dispatch(ActionCreator.toggleBookmark(offer));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(ToggleBookmark);
};

export default withToggleBookmark;
