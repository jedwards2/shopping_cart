import React from "react";

function ShoppingCart(props) {
  console.log(Object.values(props.shoppingCart));
  const price = Object.values(props.shoppingCart).reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue[0] * parseFloat(currentValue[1]),
    0
  );

  console.log(price);

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
      <div key={item + "items"}>
        <p>{item[0]}</p>
        <p>Number in Cart: {item[1]}</p>
        <p>Individual Price: {item[2]}</p>
      </div>
    );
  });

  return (
    <div>
      <button
        type="button"
        onClick={() => props.setShowCart((prevState) => !prevState)}
      >
        Return to Catalog
      </button>
      {selectedItems}
      <p>Final Price: {price}</p>
      <div></div>
    </div>
  );
}

export default ShoppingCart;
