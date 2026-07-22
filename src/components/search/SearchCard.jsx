import { Link } from "react-router-dom";

function SearchCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group flex items-center gap-4 p-4 rounded-2xl border border-gray-200 hover:border-black hover:shadow-xl transition-all duration-300 bg-white"
    >
      {/* Product Image */}

      <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />

      </div>

      {/* Product Details */}

      <div className="flex-1">

        <span className="inline-block text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full mb-2 capitalize">
          {product.category}
        </span>

        <h3 className="text-lg font-semibold text-black group-hover:text-red-500 transition">
          {product.name}
        </h3>

        <p className="text-xl font-bold mt-2">
          {product.price}
        </p>

      </div>

      {/* View */}

      <div>

        <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-red-500 transition">
          View
        </button>

      </div>

    </Link>
  );
}

export default SearchCard;