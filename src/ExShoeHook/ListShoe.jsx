import React from "react";
import ItemShoe from "./ItemShoe";

export default function ListShoe(props) {
  let { listShoe, handleAddToCart } = props;
  return (
    <div className="row col-6">
      {listShoe.map((item, index) => {
        return (
          <ItemShoe item={item} key={index} handleAddToCart={handleAddToCart} />
        );
      })}
    </div>
  );
}
