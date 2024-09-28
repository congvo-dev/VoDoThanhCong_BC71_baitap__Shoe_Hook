import React from "react";

export default function Cart(props) {
  let { cart, handleDelete, handleChangeQuantity } = props;
  let renderTable = () => {
    return cart.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>
            <img width={100} src={item.image} alt="" />
          </td>
          <td>{item.price}</td>
          <td>
            <button
              onClick={() => {
                handleChangeQuantity(item.id, -1);
              }}
              className="btn btn-danger"
            >
              -
            </button>
            <strong>{item.quantity}</strong>
            <button
              onClick={() => {
                handleChangeQuantity(item.id, 1);
              }}
              className="btn btn-danger"
            >
              +
            </button>
          </td>

          <td>
            <button
              onClick={() => {
                handleDelete(item.id);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="col-6">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}
