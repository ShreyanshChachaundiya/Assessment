import React, { useCallback, useContext, useEffect, useState } from "react";
import FilterContext from "../Context/filter-context";
import data from "../Data/data";
import Card from "./Card";
import "./List.css";

const List = () => {
  const [state, setState] = useContext(FilterContext);
  var Data = data;

  Data = data.filter((item) => {
    return (
      item.type.toLowerCase().includes(state.type.toLowerCase()) &&
      item.city.toLowerCase().includes(state.location.toLowerCase()) &&
      (item.price >= state.price || state.price == 0) &&
      (item.beds >= state.beds || state.beds == 0) &&
      item.title.toLowerCase().includes(state.search.toLowerCase())
    );
  });

  return (
    <div>
      <ul>
      <div className="util">
        <li >
          {Data.map((item) => (
            <button>
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                city={item.city}
                location={item.location}
                beds={item.beds}
                baths={item.baths}
                area={item.area}
                type={item.type}
                image={item.image}
              />
            </button>
          ))}
        </li>
        </div>
      </ul>
    </div>
  );
};

export default List;
