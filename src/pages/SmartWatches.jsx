import { useState } from "react";
import CollectionBanner from "../components/collection/CollectionBanner";
import FilterSidebar from "../components/collection/FilterSidebar";
import ProductGrid from "../components/collection/ProductGrid";
import { products } from "../data/products";

function SmartWatches() {
  const [selectedColor, setSelectedColor] = useState("");
  const [priceRange, setPriceRange] = useState(10000);
  const filteredProducts = products.filter((item) => {
    const price = Number(
      String(item.price).replace(/[₹,]/g, "")
    );
    return price <= priceRange;
  });
  return (
    <>
      <CollectionBanner />
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-3">
            <FilterSidebar
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <ProductGrid
              products={filteredProducts}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default SmartWatches;