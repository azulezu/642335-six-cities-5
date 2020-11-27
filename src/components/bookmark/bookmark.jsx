import React from "react";
import PropTypes from "prop-types";
import OfferPropTypes from "../offer-page/offer.prop";
import withToggleBookmark from "../../hocs/with-toggle-bookmark";

const Bookmark = (props) => {
  const {offer, onBookmarkClick} = props;

  return (
    <button
      className={`place-card__bookmark-button button ${offer.isBookmarked ? ` place-card__bookmark-button--active` : ``}`}
      type="button"
      onClick={onBookmarkClick}
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
};

Bookmark.propTypes = {
  offer: OfferPropTypes.isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
};

const BookmarkWrapped = withToggleBookmark(Bookmark);
export default BookmarkWrapped;
