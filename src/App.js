import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ImageCard from "./components/Servis/ImageCard";

function App() {
  const [items, setItems] = useState([]);
  let [cart, setCart] = useState({});
  let [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .then((data) => setCartItems(data));
  }, []);

  let addCount = (id) => {
    let count = cart[id] || 0;
    setCart({ ...cart, [id]: count + 1 });

  };

  let lessCount = (id) => {
    const count = cart[id] || 0;
    setCart({ ...cart, [id]: count - 1 });
  };

  return (
    <div className="app">
      <Header items={items} cart={cart} cartItems={cartItems} />
      <div className="main">
        {items.map((item) => (
          <ImageCard
            count={cart[item.id] || 0}
            addCount={addCount}
            lessCount={lessCount}
            title={item.title}
            price={item.price}
            image={item.image}
            key={item.id}
            id={item.id}
            cart={cart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
