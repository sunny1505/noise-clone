import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>

      <div className="group relative overflow-hidden rounded-[24px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">

        <div className="overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
          />

        </div>

        {/* Hover Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">

          <div className="p-6 text-white">

            <h3 className="text-xl font-bold mb-2">
              {product.name}
            </h3>

            <p className="text-lg">
              {product.price}
            </p>

          </div>

        </div>

        {/* Product Info */}

        <div className="p-5">

          <h3 className="font-semibold text-lg">
            {product.name}
          </h3>

          <p className="text-gray-500 mt-2">
            {product.price}
          </p>

        </div>

      </div>

    </Link>
  );
}

export default ProductCard;