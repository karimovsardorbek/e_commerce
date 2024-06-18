// frontend/src/components/Orders.js
import React, { useEffect, useState } from 'react';
import { getOrders } from '../services/api';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const ordersData = await getOrders();
        setOrders(ordersData);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    }

    fetchOrders();
  }, []);

  return (
    <div>
      <h2 className="text-center my-4">Orders</h2>
      <div className="list-group">
        {orders.map((order) => (
          <div key={order.id} className="list-group-item">
            <h5>Order #{order.id}</h5>
            <p>Status: {order.status}</p>
            <p className="text-muted">Total: ${order.total}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
