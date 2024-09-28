import React, { useState } from "react";
import ListShoe from "./ListShoe";
import Cart from "./Cart";
import { dataShoe } from "./dataShoe";

export default function ExShoeHook() {
  const [cart, setCart] = useState([]);
  const [listShoe, setListShoe] = useState(dataShoe);
  let handleAddToCart = (shoe) => {
    let cloneCart = [...cart];
    let index = cloneCart.findIndex((item) => item.id === shoe.id);
    if (index !== -1) {
      cloneCart[index].quantity++;
    } else {
      cloneCart.push({ ...shoe, quantity: 1 });
    }
    setCart(cloneCart);
  };
  let handleDelete = (idShoe) => {
    let cloneCart = [...cart];
    let newCart = cloneCart.filter((item) => item.id !== idShoe);
    setCart(newCart);
  };
  let handleChangeQuantity = (idShoe, option) => {
    let cloneCart = [...cart];
    let index = cloneCart.findIndex((item) => item.id === idShoe);
    cloneCart[index].quantity += option;
    if (cloneCart[index].quantity < 1) {
      handleDelete(idShoe);
    } else {
      setCart(cloneCart);
    }
  };

  return (
    <div className="row">
      <ListShoe listShoe={listShoe} handleAddToCart={handleAddToCart} />
      <Cart
        cart={cart}
        handleDelete={handleDelete}
        handleChangeQuantity={handleChangeQuantity}
      />
    </div>
  );
}
