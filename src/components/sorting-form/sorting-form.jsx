import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {SortOrders, SortOptionText} from "../../const";

class SortingForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      order: SortOrders.POPULAR,
      isOpen: false,
    };

    this.handleSortCaptionClick = this.handleSortCaptionClick.bind(this);
    this.handleSortOptionClick = this.handleSortOptionClick.bind(this);
  }

  handleSortCaptionClick() {
    this.setState((state) => ({isOpen: !state.isOpen}));
  }

  handleSortOptionClick(evt) {
    const {sortOffers, selectOffers} = this.props;
    const newOrder = evt.target.dataset.sort;

    this.setState({
      isOpen: false,
      order: newOrder,
    });
    if (newOrder === SortOrders.POPULAR) {
      selectOffers();
      return;
    }
    sortOffers(evt.target.dataset.sort);
  }

  render() {
    const {order, isOpen} = this.state;

    const getSortOptionItem = (option) => {
      const activeOptionClassName = `places__option ${order === SortOrders[option]
        ? ` places__option--active` : ``}`;

      return (
        <li className={activeOptionClassName}
          key={option}
          data-sort={SortOrders[option]}
          onClick={this.handleSortOptionClick}
          tabIndex="0"
        >
          {SortOptionText[option]}
        </li>
      );
    };

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>

        <span className="places__sorting-type"
          onClick={this.handleSortCaptionClick}
          tabIndex="0"
        >
          {SortOptionText[order]}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>

        <ul className={`places__options places__options--custom
          ${isOpen ? ` places__options--opened` : ``}`}
        >
          {Object.keys(SortOrders).map(getSortOptionItem)}
        </ul>
      </form>
    );
  }
}

SortingForm.propTypes = {
  selectOffers: PropTypes.func.isRequired,
  sortOffers: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  selectOffers() {
    dispatch(ActionCreator.selectOffers());
  },
  sortOffers(order) {
    dispatch(ActionCreator.sortOffers(order));
  },
});

export {SortingForm};
export default connect(mapStateToProps, mapDispatchToProps)(SortingForm);
