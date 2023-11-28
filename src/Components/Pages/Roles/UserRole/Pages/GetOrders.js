import React from 'react'

const GetOrders = ({order, index}) => {
    const {img, roomId, startDate, endDate, price} = order;
  return (
    <tr>
    <th>{index+1}</th>
    <td><img className='w-28 h-20 rounded ' src={img} alt="" /></td>
    <td>{roomId}</td>
    <td>{startDate}</td>
    <td>{endDate}</td>
    <td>{price}TK</td>
    <td><button className='btn btn-error text-base-200'>Delete Order</button></td>
  </tr>
  )
}

export default GetOrders;