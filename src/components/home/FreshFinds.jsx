import { Link } from "react-router-dom";
import { products } from "../../data/products";

function FreshFinds() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-20">

      <h2 className="text-5xl font-bold text-center mb-14">
        Fresh Finds
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.slice(0, 8).map((item) => (

          <Link
            key={item.id}
            to={`/product/${item.id}`}
          >

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-500">

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">

                <h3 className="font-bold text-xl">
                  {item.name}
                </h3>

                <p className="mt-2 text-2xl font-bold">
                  {item.price}
                </p>

                <button
                  className="mt-5 w-full bg-black text-white py-3 rounded-full"
                >
                  View Product
                </button>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}

export default FreshFinds;