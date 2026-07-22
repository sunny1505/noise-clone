import { useSearch } from "../../context/SearchContext";
import SearchCard from "./SearchCard";

function SearchResults() {
  const {
    searchText,
    searchResults,
  } = useSearch();

  // User ne kuch type nahi kiya
  if (searchText.trim() === "") {
    return (
      <div className="text-center py-12 text-gray-500">
        <h3 className="text-xl font-semibold">
          Start typing to search products
        </h3>

        <p className="mt-2">
          Search by product name, category or price.
        </p>
      </div>
    );
  }

  // Product nahi mila
  if (searchResults.length === 0) {
    return (
      <div className="text-center py-16">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
          alt="Not Found"
          className="w-28 mx-auto mb-5 opacity-70"
        />

        <h3 className="text-2xl font-bold">
          No Product Found
        </h3>

        <p className="text-gray-500 mt-2">
          Try searching with another keyword.
        </p>
      </div>
    );
  }

  // Product mil gaya
  return (
    <div className="grid md:grid-cols-2 gap-5">

      {searchResults.map((product) => (

        <SearchCard
          key={product.id}
          product={product}
        />

      ))}

    </div>
  );
}

export default SearchResults;