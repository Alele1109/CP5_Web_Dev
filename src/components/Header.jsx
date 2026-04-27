import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">GameStore 🎮</h1>

      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
      </nav>
    </header>
  );
}

export default Header;