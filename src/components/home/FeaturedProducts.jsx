import { products } from "../../data/products";
import ProductCard from "../product/ProductCard";

function FeaturedProducts() {

  const firstSix = products.slice(0, 6);

  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-4xl font-bold mb-10">
          Top Picks For You
        </h2>

        <div className="grid lg:grid-cols-3 xl:grid-cols-6 gap-6">

          {firstSix.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedProducts;