import React, { useState, useContext } from "react";
import FilterContext from "../Context/filter-context";

const Filters = () => {
  const [util, setUtil] = useState({
    location: "",
    price: "",
    beds: "",
    type: "",
    search: "",
  });

  const [state, setState] = useContext(FilterContext);

  const handleFilters = (e) => {
    const { name, value } = e.target;
    const newFilter = { ...util, [name]: value };
    setUtil(newFilter);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newState = util;
    setState(newState);
  };

  return (
    <div>
      <div class="bg-white rounded overflow-hidden shadow-lg mb-10 w-[880px] mx-auto shadow-md shadow-grey">
        <div className="flex flex-wrap row-auto justify-evenly items-center">
          <div className="col-auto p-4">
            <div>
              <p className="text-slate-500">Location</p>
            </div>
            <div>
              <input
                name="location"
                onChange={handleFilters}
                class="bg-white-200 rounded p-2 placeholder-gray-800 w-[150px] placeholder:font-bold border-r-2 border-gray-200 border-solid"
                placeholder="NEWYORK/LOS"
                type="text"
              />
            </div>
          </div>
          <div className="col-auto p-4 ">
            <div>
              <p className="text-slate-500">Max No of Beds</p>
            </div>
            <div>
              <select
                name="beds"
                id="price"
                class="p-2 pr-5 bg-white-100 rounded w-[40px] xs:w-32 sm:w-48 placeholder:font-bold border-r-2 border-gray-200 border-solid pr-5"
                onChange={handleFilters}
              >
                <option value="0">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">+4</option>
              </select>{" "}
            </div>
          </div>
          <div className="col-auto p-4">
            <div>
              <p className="text-slate-500">Price</p>
            </div>
            <select
              name="price"
              id="price"
              class="p-2 pr-5 pl-0 bg-white-100 rounded placeholder:font-bold border-r-2 border-gray-200 border-solid"
              onChange={handleFilters}
            >
              <option value="0">
                <p className="font-bold">Minimum Amount </p>
              </option>
              <option value="1000">$1000</option>
              <option value="2000">$2000</option>
              <option value="3000">$3000</option>
              <option value="10000">{">"}$4000</option>
            </select>
          </div>
          <div className="col-auto p-4">
            <div>
              <p className="text-slate-500">Property Type</p>
            </div>
            <div>
              <input
                class="p-2 bg-white-200 rounded pr-2 pl-0 w-[100px] placeholder-gray-800 placeholder:font-bold  border-r-2 border-gray-200 border-solid"
                placeholder="House/Villa"
                onChange={handleFilters}
                name="type"
                type="text"
              />
            </div>
          </div>
          <div className="col-auto p-4">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded xs:w-32 sm:w-48 lg:w-24 xl"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
