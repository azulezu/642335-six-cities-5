import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {placesCount} = props;

  return (
    <MainPage placesCount={placesCount} />
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
