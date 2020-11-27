import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import FavoritesPage from "../favorites-page/favorites-page";
import LoginPage from "../login-page/login-page";


const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>


      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {

  city: PropTypes.string.isRequired,
  changeOffer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({

  offer: state.offer,
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  changeOffer(offer) {
    dispatch(ActionCreator.changeOffer(offer));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
