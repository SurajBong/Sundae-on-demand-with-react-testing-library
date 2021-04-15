import Options from "./Options";
import React from "react";

function OrderEntry() {
  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
    </div>
  );
}

export default OrderEntry;
