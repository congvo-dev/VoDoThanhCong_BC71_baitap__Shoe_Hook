import React from "react";

export default function ItemShoe(props) {
  let { item, handleAddToCart } = props;
  return (
    <div className="col-3">
      <img width={100} src={item.image} alt="" />
      <h5>{item.name}</h5>
      <button
        onClick={() => {
          handleAddToCart(item);
        }}
        className="btn btn-primary"
      >
        Add
      </button>
    </div>
  );
}
