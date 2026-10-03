import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>LIBERAL</h2>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/orders">Orders</Link>
      </div>
    </nav>
  );
}

export default Navbar;