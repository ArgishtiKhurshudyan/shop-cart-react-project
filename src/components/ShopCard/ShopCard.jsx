import React from "react";
import "./ShopCard.scss";

export default function ShopCard({
  cardOpen,
  setCardOpen,
  image,
  items,
  cartItems,
  cart,
}) {
  return (
    <div className={"shopCard " + (cardOpen && "active")} id="shopCard ">
      <img src={image} alt="" />
      {Object.keys(cart).map((item) => (
        <span>
          {"էս պահը չեմ արել, բայց փուշ կանեմ էս հատվածը անպայման ։) "}
        </span>
      ))}
      <div>{cartItems}</div>

      <ul>
        <li onClick={() => setCardOpen(false)}>
          <img src="assets/images/close.png" alt="" />
        </li>
      </ul>
    </div>
  );
}
