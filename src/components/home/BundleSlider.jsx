import { Link } from "react-router-dom";
import { products } from "../../data/products";

function BundleSlider() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-5xl font-bold text-center mb-10">
          Bundle Deals
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((item) => (

            <Link
              key={item.id}
              to={`/product/${item.id}`}
            >

              <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-5">

                  <h3 className="font-bold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-xl font-semibold mt-2">
                    {item.price}
                  </p>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}

export default BundleSlider;