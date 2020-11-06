import React from "react";
import PlaceCard from "../place-card/place-card";
import {cardModificators} from "../../const";

export default function PlaceCardCities(props) {
  return (
    <PlaceCard modificator={cardModificators.CITIES} {...props} />
  );
}
PlaceCardCities.defaultName = `PlaceCardCities`;
