import React, {PureComponent} from "react";

const withMapMarkers = (Component) => {
  return class mapMarkers extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeOfferId: null,
      };
      this._handlerSetActiveOffer = this._handlerSetActiveOffer.bind(this);
    }

    _handlerSetActiveOffer(id) {
      this.setState({activeOfferId: id});
    }

    render() {
      return <Component
        {...this.props}
        activeOfferId={this.state.activeOfferId}
        onChangeActiveOffer={this._handlerSetActiveOffer}
      />;
    }
  };
};

export default withMapMarkers;
