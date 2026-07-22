import { FaSearch } from "react-icons/fa";
import { useSearch } from "../../context/SearchContext";

function SearchInput() {
  const {
    searchText,
    searchProducts,
  } = useSearch();

  const handleChange = (e) => {
    searchProducts(e.target.value);
  };

  return (
    <div className="relative">

      <input
        type="text"
        placeholder="Search for products..."
        value={searchText}
        onChange={handleChange}
        autoFocus
        className="w-full border-2 border-gray-200 rounded-full py-4 pl-14 pr-5 text-lg outline-none focus:border-black transition"
      />

      <FaSearch
        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-xl"
      />

    </div>
  );
}

export default SearchInput;