import React from "react";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        <div>{props.discription}</div>
        <div>{price}</div>
      </div>
      <div>
        <form></form>
      </div>
    </li>
  );
};

export default MealItem;
