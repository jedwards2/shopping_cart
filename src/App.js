import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ShoppingCart from "./components/ShoppingCart";
import Card from "./components/Card";

import uniqid from "uniqid";

import pinto from "./images/pinto.jpeg";
import black from "./images/black.jpeg";
import white from "./images/white.jpeg";
import cannellini from "./images/cannellini.jpeg";
import "./AppCSS.css";

function App() {
  let [itemsInShoppingCart, setItemsInShoppingCart] = React.useState(0);
  let [showCart, setShowCart] = React.useState(true);
  let [shoppingCart, setShoppingCart] = React.useState({});
  let [cardsInfo, setCardsInfo] = React.useState([
    {
      price: "0.99",
      name: "Black Bean",
      id: uniqid(),
      image: black,
    },
    {
      price: "0.98",
      name: "Pinto Bean",
      id: uniqid(),
      image: pinto,
    },
    {
      price: "0.49",
      name: "White Bean",
      id: uniqid(),
      image: white,
    },
    {
      price: "0.89",
      name: "Cannellini Bean",
      id: uniqid(),
      image: cannellini,
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
        image={cardObj.image}
        setShoppingCart={setShoppingCart}
        shoppingCart={shoppingCart}
      />
    );
  });

  return (
    <div id="page">
      {showCart && (
        <div id="shopping_page">
          <div className="header">
            <Header
              itemsInShoppingCart={itemsInShoppingCart}
              setShowCart={setShowCart}
            />
          </div>
          <div className="cardElements--div">{cardElements}</div>
          <div className="footer">
            <a href="/">Return to Home</a>
          </div>
        </div>
      )}
      {!showCart && (
        <ShoppingCart setShowCart={setShowCart} shoppingCart={shoppingCart} />
      )}
    </div>
  );
}

export default App;
