import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {SortOrders, SortOptionText} from "../../const";

class SortingForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.handleSortCaptionClick = this.handleSortCaptionClick.bind(this);
    this.handleSortOptionClick = this.handleSortOptionClick.bind(this);
  }

  handleSortCaptionClick() {
    this.setState((state) => ({isOpen: !state.isOpen}));
  }

  handleSortOptionClick(evt) {
    const {changeOrder} = this.props;

    this.setState({
      isOpen: false,
    });

    changeOrder(evt.target.dataset.sort);
  }

  render() {
    const {isOpen} = this.state;
    const {order} = this.props;

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
  order: PropTypes.string.isRequired,
  changeOrder: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  order: state.order,
});

const mapDispatchToProps = (dispatch) => ({
  changeOrder(order) {
    dispatch(ActionCreator.changeOrder(order));
  },
});

export {SortingForm};
export default connect(mapStateToProps, mapDispatchToProps)(SortingForm);
