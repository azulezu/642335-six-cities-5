import React from "react";
import PlaceCard from "../place-card/place-card";
import {cardModificators} from "../../const";

export default function PlaceCardFavorite(props) {
  return (
    <PlaceCard modificator={cardModificators.FAVORITES} {...props} />
  );
}
PlaceCardFavorite.defaultName = `PlaceCardFavorite`;
