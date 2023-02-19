import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Filters from "./components/Filters";
import Header from "./components/Header";
import List from "./components/List";
import Search from "./components/Search";
import React, { useState, useCallback, createContext } from "react";
import FilterContext from "./Context/filter-context";

function App() {
  const [state, setState] = useState({
      location: "",
      price: "",
      beds: "",
      type: "",
      search: "",
    });
  


  return (
    <FilterContext.Provider value={[state, setState]}>
      <div className="App">
        <Router>
          <Header />
          <Search />
          <Filters />
          <List />
        </Router>
      </div>
    </FilterContext.Provider>
  );
}

export default App;