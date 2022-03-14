import React from "react";
import "./Header.scss";
import { useState } from "react";
import ShopCard from "../ShopCard/ShopCard";

export default function Header({ items ,cart,cartItems}) {
  const [cardOpen, setCardOpen] = useState(false);
  let clikdiv = () => {
    return setCardOpen(!cardOpen);
  };

  return (
    <div className={"navBar " + (cardOpen && " active")}>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#product">product</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>

      <div className="icon" onClick={clikdiv}>
        <img src="./assets/images/shopingCard.png" alt="" />
      </div>

      {<ShopCard cartItems={cartItems}   cart={cart} items={items} cardOpen={cardOpen} setCardOpen={setCardOpen} />}
    </div>
  );
}
