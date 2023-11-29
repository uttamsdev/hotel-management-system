import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../Firebase/firebase.init';
import Loading from '../../../Shared/Loading';
import FoodOrdersTable from './FoodOrdersTable';

const MyFoodOrders = () => {
    const [user, loading] = useAuthState(auth);
    const [orderData, setOrderData] = useState([]);
  
    console.log(orderData)
    
    useEffect(() => {
      fetch(`http://localhost:5000/api/v1/order-food/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setOrderData(data?.data));
    }, [user?.email, setOrderData]);
    if(loading){
      return <Loading></Loading>
    }
  return (
    <div className="relative ">
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className="bg-base-200">
          <tr>
            <th></th>
            <th>Image</th>
            <th>Food ID</th>
            <th>Food Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            orderData.map((order, index ) => <FoodOrdersTable  key={order.foodId} index={index} order={order} orderData={orderData} user={user} setOrderData={setOrderData}></FoodOrdersTable>)
          }
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default MyFoodOrders;