import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function Orders() {
  const [orders, setOrders] = useState([]);

  async function getOrders() {
    const { data, error } = await supabase
      .from("orders")
      .select("*");

    if (error) {
      console.error(error);
      alert("Failed to retrieve orders");
      return;
    }

    setOrders(data);
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <main className="orders-page">
      <h1>Your Orders</h1>

      {orders.map((order) => (
        <div className="order-card" key={order.id}>
          <h2>{order.book_title}</h2>

          <p>Quantity: {order.quantity}</p>

          <p>Total: ₹{order.total}</p>

          <p>Status: {order.status}</p>

          <p>Name: {order.name}</p>

          <p>Address: {order.address}</p>

          <p>Payment Method: {order.payment_method}</p>
        </div>
      ))}
    </main>
  );
}

export default Orders;