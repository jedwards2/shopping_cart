import React from "react";
import "../ShoppingCartCSS.css";

function ShoppingCart(props) {
  const price = Object.values(props.shoppingCart).reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue[0] * parseFloat(currentValue[1]),
    0
  );

  let itemsArray = [];
  for (let item in props.shoppingCart) {
    itemsArray.push([
      item,
      props.shoppingCart[item][0],
      props.shoppingCart[item][1],
    ]);
  }

  let selectedItems = itemsArray.map((item) => {
    return (
      <div key={item + "items"} className="item--div">
        <p>{item[0]}</p>
        <p>Number in Cart: {item[1]}</p>
        <p>Individual Price: {item[2]}</p>
      </div>
    );
  });

  return (
    <div className="shoppingCartPage">
      <button
        type="button"
        onClick={() => props.setShowCart((prevState) => !prevState)}
      >
        Return to Catalog
      </button>
      {selectedItems}
      <p className="price--p">Final Price: {price}</p>
      <div></div>
    </div>
  );
}

export default ShoppingCart;
