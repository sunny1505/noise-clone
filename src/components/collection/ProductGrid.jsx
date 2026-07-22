import ProductCard from "./ProductCard";

function ProductGrid({ products }) {

  return (

    <div className="w-full">

      <div className="flex justify-between items-center mb-10">

        <h2 className="text-3xl font-bold">
          Smart Watches
        </h2>

        <select className="border rounded-xl px-4 py-3">

          <option>Featured</option>

          <option>Price Low To High</option>

          <option>Price High To Low</option>

        </select>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {products.length > 0 ? (

          products.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))

        ) : (

          <h2>No Products Found</h2>

        )}

      </div>

    </div>

  );

}

export default ProductGrid;