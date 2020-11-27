import React from "react";
import PropTypes from "prop-types";
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import Header from "../header/header";
import LoginForm from "../login-form/login-form";
import {PASSWORD_MIN_LENGTH, REGEXP_EMAIL} from "../../const";

const validate = ({email = ``, password = ``}) => {
  return (password.length > PASSWORD_MIN_LENGTH && REGEXP_EMAIL.test(email)) ? ``
    : `Форма заполнена неверно`;
};

const LoginPage = (props) => {
  const {city, isAuthorized, signIn} = props;

  if (isAuthorized) {
    return <Redirect to="/" />;
  }

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>

            <LoginForm
              submitAction = {signIn}
              validateForm = {validate}
            />

          </section>

          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link"
                to={`/`}
              >
                <span>{city}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

LoginPage.propTypes = {
  city: PropTypes.string.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  signIn: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  signIn({email = ``}) {
    dispatch(ActionCreator.signIn(email));
  },
});

const mapStateToProps = (state) => ({
  city: state.city,
  isAuthorized: state.isAuthorized,
});

export {LoginPage};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
