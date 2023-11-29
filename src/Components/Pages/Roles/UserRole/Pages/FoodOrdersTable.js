import React, { useEffect } from "react";
import swal from "sweetalert";

const FoodOrdersTable = ({ order, index, orderData, user, setOrderData }) => {
  const { img, foodId, name, price } = order;

  const handleDeleteOrder = async (foodId) => {
    console.log("foodID is: ",foodId);
    // alert(`Clicked on ${roomId}`)
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const url = `http://localhost:5000/api/v1/order-food/${foodId}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        swal("Your order Deleted", {
          icon: "success",
        });

        //this second fetched is use to refresh delete data 
        fetch(`http://localhost:5000/api/v1/order-food/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setOrderData(data?.data));
      } else {
        swal("Oder not deleted. You canceled it!");
      }
    });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img className="w-28 h-20 rounded " src={img} alt="" />
      </td>
      <td>{foodId}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <button
          onClick={() => {
            handleDeleteOrder(foodId);
          }}
          className="btn btn-error text-base-200 btn-outline btn-sm"
        >
          Delete Order
        </button>
      </td>
    </tr>
  );
};

export default FoodOrdersTable;
