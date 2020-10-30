export const Styles = {
  DISPLAY_NONE: {
    display: `none`
  },
};

export const MAX_RATING = 5;

export const convertRatingToStyle = (rating) => {
  return {width: rating * 20 + `%`};
};
