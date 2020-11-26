import React from "react";
import PropTypes from "prop-types";
import withFormState from "../../hocs/with-form-state";

const LoginForm = (props) => {
  const {onChangeField, onSubmit} = props;

  return (
    <form className="login__form form"
      action="#"
      method="post"
      onSubmit={onSubmit}
    >
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input className="login__input form__input"
          type="email" name="email" placeholder="Email" required=""
          autoComplete="username"
          onChange={onChangeField}
        />
      </div>

      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input className="login__input form__input"
          type="password" name="password"
          placeholder="Password" required=""
          onChange={onChangeField}
        />
      </div>

      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
};

LoginForm.propTypes = {
  onChangeField: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const LoginFormWrapped = withFormState(LoginForm);
export default LoginFormWrapped;
