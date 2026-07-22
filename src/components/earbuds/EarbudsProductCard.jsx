import { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function EarbudsProductCard({ product }) {

  const [image, setImage] = useState(product.colors[0].image);

  // Cart Hook
  const { addToCart } = useCart();

  return (

    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">

      {/* Product Image */}

      <Link to={`/product/${product.id}`}>

        <div className="bg-gray-100 overflow-hidden">

          <img
            src={image}
            alt={product.name}
            className="w-full h-72 object-cover group-hover:scale-105 transition duration-300"
          />

        </div>

      </Link>

      {/* Product Details */}

      <div className="p-5">

        <div className="flex justify-between items-center">

          <span className="text-yellow-500 font-semibold">
            ⭐ {product.rating}
          </span>

          <FaHeart className="cursor-pointer text-xl hover:text-red-500 transition" />

        </div>

        <h2 className="text-xl font-bold mt-3">
          {product.name}
        </h2>

        <p className="text-gray-500 mt-2">
          Battery : {product.battery}
        </p>

        <p className="text-gray-500">
          Bluetooth : {product.bluetooth}
        </p>

        {product.anc && (
          <span className="inline-block mt-2 bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full">
            ANC Supported
          </span>
        )}

        <div className="mt-5 flex items-center gap-3">

          <span className="text-2xl font-bold">
            ₹{product.price}
          </span>

          <span className="line-through text-gray-400">
            ₹{product.oldPrice}
          </span>

        </div>

        {/* Color Buttons */}

        <div className="flex gap-3 mt-5">

          {product.colors.map((color) => (

            <button
              key={color.name}
              onClick={() => setImage(color.image)}
              style={{
                backgroundColor: color.code,
              }}
              className="w-7 h-7 rounded-full border-2 border-gray-300 hover:scale-110 transition"
            />

          ))}

        </div>

        {/* Add To Cart */}

        <button
          onClick={() => {
            console.log("Adding Product :", product);
            addToCart(product);
          }}
          className="w-full mt-6 bg-black text-white py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition"
        >
          <FaShoppingCart />
          Add To Cart
        </button>
      </div>
    </div>
  );
}
export default EarbudsProductCard;