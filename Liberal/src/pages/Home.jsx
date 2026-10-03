import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      <h1>Welcome to LIBERAL</h1>

      <p>
        Discover books, explore new stories, and find your next favourite read.
      </p>

      <Link to="/books">
        <button>Explore Books</button>
      </Link>
    </main>
  );
}

export default Home;