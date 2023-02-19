import React, { useContext } from "react";
import FilterContext from "../Context/filter-context";
import "./Search.css";

const Search = () => {
  const [state, setState] = useContext(FilterContext);

  const handleFilters = (e) => {
    const { name, value } = e.target;
    const newFilter = { ...state, search: value };
    setState(newFilter);
  };

  return (
    <div className="flex flex-wrap flex-row justify-between align-content-center items-center p-6 my-3 search">
      <div className="text-4xl font-bold mb-2">
        <p>Search properties to rent</p>
      </div>
      <div className="text-sm mb-2">
        <input
          onChange={handleFilters}
          class="bg-white-200 p-3 rounded placeholder-black  border-solid border-2 border-gray-300 w-50"
          type="search"
          placeholder="Title ..."
          name="searchbar"
          id="search"
        />
      </div>
    </div>
  );
};

export default Search;
