import React from "react";
import PlaceCard from "../place-card/place-card";
import {cardModificators} from "../../const";

export default function PlaceCardNear(props) {
  return (
    <PlaceCard modificator={cardModificators.NEAR} {...props} />
  );
}
PlaceCardNear.defaultName = `PlaceCardNear`;
