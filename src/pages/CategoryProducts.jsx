import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

function CategoryProducts() {

  const { category } = useParams();

  const filteredProducts = products.filter(
    (item) => item.category === category
  );

  return (
    <section className="max-w-7xl mx-auto px-5 py-16">

      <h1 className="text-5xl font-bold mb-12 capitalize">
        {category.replaceAll("-", " ")}
      </h1>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">

        {filteredProducts.map((item) => (

          <Link
            key={item.id}
            to={`/product/${item.id}`}
          >

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">

                <h3 className="font-bold text-lg">
                  {item.name}
                </h3>

                <p className="mt-2 text-xl font-semibold">
                  {item.price}
                </p>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}

export default CategoryProducts;