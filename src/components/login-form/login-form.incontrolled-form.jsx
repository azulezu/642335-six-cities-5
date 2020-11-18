import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const PASSWORD_MIN_LENGTH = 0;
const REGEXP_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
const FIELDS_NAMES = [`email`, `password`];

const isLoginValide = (formConent) => {
  const {email, password} = formConent;
  return password.length > PASSWORD_MIN_LENGTH && REGEXP_EMAIL.test(email);
};


const LoginForm = (props) => {
  const {email, signIn} = props;
  const inputRef = React.createRef();

  const handleSubmit = (evt) => {
    const formContent = {};
    const formData = new FormData(inputRef.current);
    evt.preventDefault();

    for (let field of FIELDS_NAMES) {
      formContent[field] = formData.get(field);
    }

    if (isLoginValide(formContent)) {
      signIn(formContent[`email`]);
    }
  };

  return (
    <form className="login__form form"
      action="#"
      method="post"
      ref={inputRef}
      onSubmit={handleSubmit}
    >
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input className="login__input form__input"
          type="email" name="email" placeholder="Email" required=""
          autoComplete="username"
          defaultValue={email || ``}
        />
      </div>

      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input className="login__input form__input"
          type="password" name="password"
          placeholder="Password" required=""
        />
      </div>

      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  signIn: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.email,
});

const mapDispatchToProps = (dispatch) => ({
  signIn(email) {
    dispatch(ActionCreator.signIn(email));
  },
});

export {LoginForm};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
