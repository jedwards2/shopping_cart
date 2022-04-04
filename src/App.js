import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ShoppingCart from "./components/ShoppingCart";
import Card from "./components/Card";
import uniqid from "uniqid";
import "./AppCSS.css";

function App() {
  let [itemsInShoppingCart, setItemsInShoppingCart] = React.useState(0);
  let [showCart, setShowCart] = React.useState(true);
  let [shoppingCart, setShoppingCart] = React.useState({});
  let [cardsInfo, setCardsInfo] = React.useState([
    {
      price: "32.99",
      name: "Black Bean",
      id: uniqid(),
    },
    {
      price: "45.99",
      name: "Pinto Bean",
      id: uniqid(),
    },
  ]);

  useEffect(() => {
    setItemsInShoppingCart(Object.keys(shoppingCart).length);
  }, [shoppingCart]);

  let cardElements = cardsInfo.map((cardObj) => {
    return (
      <Card
        price={cardObj.price}
        name={cardObj.name}
        key={cardObj.id}
        setShoppingCart={setShoppingCart}
        shoppingCart={shoppingCart}
      />
    );
  });

  return (
    <div>
      {showCart && (
        <div>
          <Header
            itemsInShoppingCart={itemsInShoppingCart}
            setShowCart={setShowCart}
          />
          <div className="cardElements--div">{cardElements}</div>
        </div>
      )}
      {!showCart && (
        <ShoppingCart setShowCart={setShowCart} shoppingCart={shoppingCart} />
      )}
    </div>
  );
}

export default App;
