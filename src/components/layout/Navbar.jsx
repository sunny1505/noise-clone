import { Link } from "react-router-dom";
import { useState } from "react";

import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaHeart,
} from "react-icons/fa";

import { useCart } from "../../context/CartContext";
import { useSearch } from "../../context/SearchContext";

import AuthModal from "../auth/AuthModal";
import SearchModal from "../search/SearchModal";

function Navbar() {

  const { totalItems } = useCart();

  // ✅ Search Context
  const { setShowSearch } = useSearch();

  // Auth Modal
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>

      <nav className="container mx-auto px-4 py-4">

        <div className="flex justify-between items-center">

          {/* Logo */}

          <Link
            to="/"
            className="text-3xl font-bold"
          >
            NOISE
          </Link>

          {/* Menu */}

          <ul className="hidden md:flex gap-8 font-medium">

            <li>
              <Link
                to="/"
                className="hover:text-red-500 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/smart-watches"
                className="hover:text-red-500 transition"
              >
                Smart Watches
              </Link>
            </li>

            <li>
              <Link
                to="/earbuds"
                className="hover:text-red-500 transition"
              >
                Earbuds
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-red-500 transition"
              >
                Contact
              </Link>
            </li>

          </ul>

          {/* Icons */}

          <div className="flex items-center gap-7 text-xl">

            {/* Search */}

            <button
              onClick={() => setShowSearch(true)}
              className="hover:text-red-500 transition"
            >
              <FaSearch />
            </button>

            {/* User */}

            <button
              onClick={() => setShowAuthModal(true)}
              className="hover:text-red-500 transition"
            >
              <FaUser />
            </button>

            {/* Wishlist */}

            <Link
              to="/wishlist"
              className="hover:text-red-500 transition"
            >
              <FaHeart />
            </Link>

            {/* Cart */}

            <Link
              to="/cart"
              className="relative hover:text-red-500 transition"
            >

              <FaShoppingCart />

              {totalItems > 0 && (

                <span className="absolute -top-2 -right-3 bg-red-600 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">

                  {totalItems}

                </span>

              )}

            </Link>

          </div>

        </div>

      </nav>

      {/* Auth Modal */}

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />

      {/* Search Modal */}

      <SearchModal />

    </>
  );

}

export default Navbar;