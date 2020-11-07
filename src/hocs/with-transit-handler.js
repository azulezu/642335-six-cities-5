import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withTransitHandler = (Component) => {
  return class transitHandler extends PureComponent {
    constructor(props) {
      super(props);
      this._onEvent = props.onEvent;
      this._handler = this._handler.bind(this);

      transitHandler.propTypes = {
        onEvent: PropTypes.func,
      };
    }

    _handler(payload) {
      if (this._onEvent) {
        this._onEvent(payload);
      }
    }

    render() {
      return <Component
        {...this.props}
        onEvent={this._handler}
      />;
    }
  };
};

export default withTransitHandler;
