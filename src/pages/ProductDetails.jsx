import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {

  const { id } = useParams();

  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-5 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Product Not Found
        </h2>
      </div>
    );
  }

  return (
    <>

      {/* Product Details */}

      <section className="max-w-7xl mx-auto px-5 py-14">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Product Image */}

          <div>

            <div className="bg-gray-100 rounded-3xl overflow-hidden shadow">

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[550px] object-cover"
              />

            </div>

          </div>

          {/* Product Content */}

          <div>

            <h1 className="text-5xl font-bold leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-4">

              <div className="text-yellow-400 text-xl">
                ★★★★★
              </div>

              <span className="text-gray-500">
                (124 Reviews)
              </span>

            </div>

            <h2 className="text-4xl font-bold mt-6">
              {product.price}
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Premium quality Noise product designed for everyday
              performance with stylish design, long battery life,
              smart features and excellent comfort.
            </p>

            {/* Features */}

            <div className="mt-10">

              <h3 className="text-xl font-bold mb-4">
                Key Features
              </h3>

              <ul className="space-y-3 text-gray-700">

                <li>✔ AMOLED Display</li>

                <li>✔ Bluetooth Calling</li>

                <li>✔ Health Tracking</li>

                <li>✔ Heart Rate Monitor</li>

                <li>✔ 7 Days Battery Backup</li>

                <li>✔ IP68 Water Resistant</li>

              </ul>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-10">

              <button
                onClick={() => addToCart(product)}
                className="bg-black text-white px-10 py-4 rounded-full hover:bg-gray-800 duration-300"
              >
                Add To Cart
              </button>

              <button
                className="bg-orange-500 text-white px-10 py-4 rounded-full hover:bg-orange-600 duration-300"
              >
                Buy Now
              </button>

            </div>

          </div>

        </div>

      </section>

            {/* Related Products */}

      <section className="max-w-7xl mx-auto px-5 pb-20">

        <h2 className="text-3xl font-bold mb-10">
          Related Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {products
            .filter(
              (item) =>
                item.category === product.category &&
                item.id !== product.id
            )
            .slice(0, 4)
            .map((item) => (

              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="group"
              >

                <div className="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 overflow-hidden">

                  <div className="bg-gray-100">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                    />

                  </div>

                  <div className="p-5">

                    <h3 className="font-semibold text-lg">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-xl font-bold">
                      {item.price}
                    </p>

                  </div>

                </div>

              </Link>

            ))}

        </div>

      </section>

    </>
  );
}

export default ProductDetails;