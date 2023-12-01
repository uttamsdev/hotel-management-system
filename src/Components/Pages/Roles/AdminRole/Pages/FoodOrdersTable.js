import React from "react";
import swal from "sweetalert";

const FoodOrdersTable = ({ order, index, setAllOrderData }) => {
  const { img, foodId, email, name, price } = order;

  const handleDeleteOrder = async (foodId) => {
    // alert(`Clicked on ${roomId}`)
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const url = `https://hotel-radissons-ac92b8fd51f6.herokuapp.com/api/v1/order-food/${foodId}`;
        await fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        swal("The order is Deleted", {
          icon: "success",
        });

        //this second fetched is use to refresh delete data
        await fetch(
          "https://hotel-radissons-ac92b8fd51f6.herokuapp.com/api/v1/order-food/all-foods-orders"
        )
          .then((res) => res.json())
          .then((data) => setAllOrderData(data?.data));
      } else {
        swal("Oder not deleted. You canceled it!");
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img className="w-10 xl:w-32 xl:h-20 rounded " src={img} alt="" />
      </td>
      <td>{foodId}</td>
      <td>{email}</td>
      <td>{name}</td>
      <td>{price}TK</td>
      <td>
        <button
          onClick={() => {
            handleDeleteOrder(foodId);
          }}
          className="btn btn-error text-base-200 btn-sm btn-outline"
        >
          Delete Order
        </button>
      </td>
    </tr>
  );
};

export default FoodOrdersTable;
