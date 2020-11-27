import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withFormState = (Component) => {
  class WithFormState extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {};
      this.submitAction = props.submitAction;
      this.validateForm = props.validateForm;

      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFieldChange(evt) {
      this._setFormErrorMessage(evt.target.form, ``);

      this.setState({
        [evt.target.name]: evt.target.value
      });
    }

    handleSubmit(evt) {
      evt.preventDefault();

      const validationErrorMessage = this.validateForm(this.state);
      this._setFormErrorMessage(evt.target, validationErrorMessage);
      if (validationErrorMessage) {
        return;
      }

      if (this.submitAction) {
        this.submitAction(this.state);
      }
    }

    _setFormErrorMessage(form, message = ``) {
      form[0].setCustomValidity(message);
      if (message) {
        form[0].reportValidity();
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          onChangeField={this.handleFieldChange}
          onSubmit={this.handleSubmit}
        />
      );
    }
  }

  WithFormState.propTypes = {
    submitAction: PropTypes.func,
    validateForm: PropTypes.func,
  };

  return WithFormState;
};

export default withFormState;
