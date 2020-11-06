import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {sitePages} from "../../const";

const Header = (props) => {
  const {sitePage} = props;

  const getLogo = (page) => {
    return (page !== sitePages.Main)
      ? (
        <a className="header__logo-link header__logo-link--active">
          <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
        </a>
      )
      : (
        <Link className="header__logo-link"
          to={`/`}
        >
          <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
        </Link>
      );
  };


  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {getLogo(sitePage)}
          </div>

          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </a>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  sitePage: PropTypes.string,
};

export default Header;
