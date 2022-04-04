import React from "react";
import "../HeaderCSS.css";

function Header(props) {
  return (
    <div className="div--header">
      <h1>Beans</h1>
      <div className="rightdiv--header">
        <p>{props.itemsInShoppingCart} items in shopping cart </p>
        <button
          type="button"
          onClick={() => props.setShowCart((prevState) => !prevState)}
        >
          View Cart
        </button>
      </div>
    </div>
  );
}

export default Header;
