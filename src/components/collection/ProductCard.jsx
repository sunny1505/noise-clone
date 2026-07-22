import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl duration-300">

      <Link to={`/product/${product.id}`}>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover hover:scale-105 duration-500"
        />

      </Link>

      <div className="p-5">

        <h3 className="text-xl font-bold">
          {product.name}
        </h3>

        <p className="text-2xl font-bold mt-3">
          {product.price}
        </p>

        <button className="mt-5 w-full bg-black text-white py-3 rounded-full hover:bg-gray-800">
          Add To Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;