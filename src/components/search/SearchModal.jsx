import { FaTimes } from "react-icons/fa";
import { useSearch } from "../../context/SearchContext";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

function SearchModal() {
  const { showSearch, setShowSearch, clearSearch } = useSearch();

  if (!showSearch) return null;

  const handleClose = () => {
    clearSearch();
    setShowSearch(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-start justify-center pt-20">

      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden">

        {/* Header */}

        <div className="flex justify-between items-center px-6 py-5 border-b">

          <h2 className="text-2xl font-bold">
            Search Products
          </h2>

          <button
            onClick={handleClose}
            className="text-2xl hover:text-red-500"
          >
            <FaTimes />
          </button>

        </div>

        {/* Search Input */}

        <div className="p-6">

          <SearchInput />

        </div>

        {/* Results */}

        <div className="px-6 pb-6 max-h-[500px] overflow-y-auto">

          <SearchResults />

        </div>

      </div>

    </div>
  );
}

export default SearchModal;