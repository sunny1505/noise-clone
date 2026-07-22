import EarbudsProductCard from "./EarbudsProductCard";

function EarbudsProductGrid({ products }) {

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {products.map((product) => (

        <EarbudsProductCard
          key={product.id}
          product={product}
        />

      ))}

    </div>

  );

}

export default EarbudsProductGrid;