import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const PASSWORD_MIN_LENGTH = 0;
const REGEXP_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

class LoginForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: ``,
      password: ``,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (this.isLoginValide()) {
      this.props.signIn(this.state.email);
    }
  }

  handleFieldChange(evt) {
    const {name, value} = evt.target;
    this.setState({
      [name]: value
    });
  }

  isLoginValide() {
    const {email, password} = this.state;

    return password.length > PASSWORD_MIN_LENGTH && REGEXP_EMAIL.test(email);
  }

  render() {
    return (
      <form className="login__form form"
        action="#"
        method="post"
        onSubmit={this.handleSubmit}
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input className="login__input form__input"
            type="email" name="email" placeholder="Email" required=""
            autoComplete="username"
            onChange={this.handleFieldChange}
          />
        </div>

        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input className="login__input form__input"
            type="password" name="password"
            placeholder="Password" required=""
            onChange={this.handleFieldChange}
          />
        </div>

        <button className="login__submit form__submit button" type="submit">Sign in</button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  signIn: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  signIn(email) {
    dispatch(ActionCreator.signIn(email));
  },
});

export {LoginForm};
export default connect(null, mapDispatchToProps)(LoginForm);
