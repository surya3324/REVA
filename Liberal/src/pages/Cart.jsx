import { useState } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "../supabase";

function Cart() {
  const location = useLocation();

  const book = location.state || {
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 399,
  };

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  async function handleOrder() {
    if (!name || !address || !quantity || !paymentMethod) {
      alert("Please fill all the details");
      return;
    }

    const total = Number(quantity) * book.price;

    const { error } = await supabase
      .from("orders")
      .insert([
        {
          book_title: book.title,
          quantity: Number(quantity),
          total: total,
          status: "Order Placed",
          name: name,
          address: address,
          payment_method: paymentMethod,
        },
      ]);

    if (error) {
      console.error(error);
      alert("Order failed: " + error.message);
      return;
    }

    alert("Order placed successfully!");

    setName("");
    setAddress("");
    setQuantity("");
    setPaymentMethod("");
  }

  return (
    <main className="cart-page">
      <h1>Buy Book</h1>

      <div className="cart-form">

        <label>Book</label>

        <input
          type="text"
          value={book.title}
          readOnly
        />

        <label>Author</label>

        <input
          type="text"
          value={book.author}
          readOnly
        />

        <label>Price</label>

        <input
          type="text"
          value={`₹${book.price}`}
          readOnly
        />

        <label>Quantity</label>

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Enter quantity"
        />

        <label>Name</label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <label>Address</label>

        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your delivery address"
        ></textarea>

        <label>Payment Method</label>

        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="">Select Payment Method</option>
          <option value="Cash">Cash</option>
          <option value="UPI">UPI</option>
        </select>

        <button onClick={handleOrder}>
          Place Order
        </button>

      </div>
    </main>
  );
}

export default Cart;