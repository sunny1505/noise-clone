import { createContext, useContext, useState } from "react";
import { products } from "../data/products";

const SearchContext = createContext();

export function SearchProvider({ children }) {

  const [searchText, setSearchText] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const [showSearch, setShowSearch] = useState(false);

  const searchProducts = (text) => {
  setSearchText(text);

  const keyword = text.trim().toLowerCase();

  if (keyword === "") {
    setSearchResults([]);
    return;
  }

  const filteredProducts = products.filter((product) => {
    const searchableText = `
      ${product.name}
      ${product.category}
      ${product.price}
    `
      .toLowerCase()
      .replace(/\s+/g, " ");

    return searchableText.includes(keyword);
  });

  setSearchResults(filteredProducts);
};

  const clearSearch = () => {

    setSearchText("");

    setSearchResults([]);

  };

  return (

    <SearchContext.Provider

      value={{

        products,

        searchText,

        searchResults,

        showSearch,

        setShowSearch,

        searchProducts,

        clearSearch,

      }}

    >

      {children}

    </SearchContext.Provider>

  );

}

export function useSearch() {

  return useContext(SearchContext);

}