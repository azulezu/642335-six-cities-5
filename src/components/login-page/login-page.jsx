import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import Header from "../header/header";
// import LoginForm from "../login-form/login-form.controlled-form";
// import withState from "../../hocs/withSubmit";
// const wrappedLoginForm = withState(LoginForm);

import LoginForm from "../login-form/login-form.incontrolled-form";

const LoginPage = (props) => {
  const {city} = props;

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>

            <LoginForm />

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
};

const mapStateToProps = (state) => ({
  city: state.city,
});

export {LoginPage};
export default connect(mapStateToProps)(LoginPage);
