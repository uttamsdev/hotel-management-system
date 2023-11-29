import React from 'react'
import swal from 'sweetalert';

const FoodOrdersTable = ({order, index, setAllOrderData}) => {
    const { img, foodId, email, name, price } = order;

    const handleDeleteOrder = async (foodId) => {
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
            swal("The order is Deleted", {
              icon: "success",
            });
    
            //this second fetched is use to refresh delete data 
            fetch("http://localhost:5000/api/v1/order-food/all-foods-orders").then(res => res.json()).then(data => setAllOrderData(data?.data))
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
  )
}

export default FoodOrdersTable;