import { useNavigate } from "react-router-dom";

function Books() {
  const navigate = useNavigate();

  function addToCart(title, author, price) {
    navigate("/cart", {
      state: {
        title: title,
        author: author,
        price: price,
      },
    });
  }

  return (
    <main className="books-page">
      <h1>Available Books</h1>

      <div className="books-grid">

        <div className="book-card">
          <h2>The Alchemist</h2>
          <p>Author: Paulo Coelho</p>
          <p>Price: ₹399</p>

          <button onClick={() => addToCart("The Alchemist", "Paulo Coelho", 399)}>
            Add to Cart
          </button>
        </div>

        <div className="book-card">
          <h2>Atomic Habits</h2>
          <p>Author: James Clear</p>
          <p>Price: ₹499</p>

          <button onClick={() => addToCart("Atomic Habits", "James Clear", 499)}>
            Add to Cart
          </button>
        </div>

        <div className="book-card">
          <h2>Harry Potter</h2>
          <p>Author: J.K. Rowling</p>
          <p>Price: ₹599</p>

          <button onClick={() => addToCart("Harry Potter", "J.K. Rowling", 599)}>
            Add to Cart
          </button>
        </div>

        <div className="book-card">
          <h2>Rich Dad Poor Dad</h2>
          <p>Author: Robert Kiyosaki</p>
          <p>Price: ₹350</p>

          <button onClick={() => addToCart("Rich Dad Poor Dad", "Robert Kiyosaki", 350)}>
            Add to Cart
          </button>
        </div>

      </div>
    </main>
  );
}

export default Books;