import React, {PureComponent} from "react";

const withToggleStatus = (Component) => {
  class WithToggleStatus extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        status: false,
      };
      this.handleStatusToggle = this.handleStatusToggle.bind(this);
    }

    handleStatusToggle() {
      this.setState((prevState) => ({status: !prevState.status}));
    }

    render() {
      const {status} = this.state;

      return (
        <Component
          {...this.props}
          status={status}
          onStatusToggleClick={this.handleStatusToggle}
        />
      );
    }
  }

  return WithToggleStatus;
};

export default withToggleStatus;
