import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/">
            <h1 className="text-3xl font-bold">
              NOISE
            </h1>
          </Link>
          {/* Menu */}
          <ul className="hidden lg:flex gap-8 font-medium">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/products">Smart Watches</Link>
            </li>
          </ul>
          <div className="flex gap-5 text-xl">
            <FaSearch className="cursor-pointer" />
            <FaUser className="cursor-pointer" />
            <FaShoppingCart className="cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;