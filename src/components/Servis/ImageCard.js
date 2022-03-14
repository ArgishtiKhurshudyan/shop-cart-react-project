import React from "react";
import "./Image.scss";
function ImageCard({
  title,
  id,
  image,
  price,
  cart,
  addCount,
  lessCount,
  count,
}) {
  return (
    <div className="imageCard">
      <div className="imgs">
        <img src={image} />
        <div className="title">
          <h3 id={id}>{title} </h3>
          <span>
            <h1>
              Price:{price}$ {id}
            </h1>
          </span>
        </div>
        <div className="btn">
          <button onClick={() => addCount(id,title)}>+</button>
          <span>{count}</span>
          {console.log(cart)}

          <button onClick={() => count > 0 && lessCount(id)}>-</button>
        </div>
      </div>
    </div>
  );
}
export default ImageCard;
