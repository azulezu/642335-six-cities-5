import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {SortOrders, SortOptionText} from "../../const";
import withToggleStatus from "../../hocs/with-toggle-status";

class SortingForm extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSortOptionClick = this.handleSortOptionClick.bind(this);
  }

  handleSortOptionClick(evt) {
    const {changeOrder, onStatusToggleClick} = this.props;

    onStatusToggleClick();
    changeOrder(evt.target.dataset.sort);
  }

  render() {
    const onSortCaptionClick = this.props.onStatusToggleClick;
    const isOpen = this.props.status;
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
          onClick={onSortCaptionClick}
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
  status: PropTypes.bool.isRequired,
  onStatusToggleClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({APP}) => ({
  order: APP.order,
});

const mapDispatchToProps = (dispatch) => ({
  changeOrder(order) {
    dispatch(ActionCreator.changeOrder(order));
  },
});

const SortingFormWrapped = withToggleStatus(SortingForm);

export {SortingFormWrapped};
export default connect(mapStateToProps, mapDispatchToProps)(SortingFormWrapped);
