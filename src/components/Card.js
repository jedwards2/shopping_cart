import React, { useState } from "react";
import "../CardCSS.css";

function Card(props) {
  let [num, setNum] = React.useState(0);

  let handleChange = (event) => {
    if (event.target.value < 0) {
      setNum(0);
    } else {
      setNum(parseFloat(event.target.value));
    }
  };

  let handleButtonChange = (num, sign) => {
    if (sign === "-") {
      if (num - 1 < 0) {
        setNum(0);
      } else {
        setNum(num - 1);
      }
    } else {
      setNum((prevNum) => prevNum + 1);
    }
  };

  let addToCart = (num, name, price) => {
    const newState = { ...props.shoppingCart };
    newState[name] = [num, price];
    props.setShoppingCart(newState);
  };

  return (
    <div className="card--div">
      <h1>{props.name}</h1>
      <h3>$ {props.price}</h3>
      <div className="input--div">
        <button type="button" onClick={() => handleButtonChange(num, "-")}>
          -
        </button>
        <input
          type="number"
          name="amountInput"
          value={num}
          onChange={(e) => handleChange(e)}
        ></input>
        <button type="button" onClick={() => handleButtonChange(num, "+")}>
          +
        </button>
      </div>
      <button
        type="button"
        onClick={() => addToCart(num, props.name, props.price)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
