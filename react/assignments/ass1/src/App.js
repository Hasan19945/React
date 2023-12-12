import "./App.css";
import Header from "./components/Header/Header";
import Categories from "./components/Products/Categories";
import ProductList from "./components/Products/ProductList";
import Search from "./components/Products/Search";
import React, { useState } from "react";


function App() {
   const [search, setSearch] = useState("");
   const handleSearch = (e) => {
     setSearch(e)
   };
  return (
    <div>
      <Header />
      <Categories />
      <Search handleSearch={handleSearch} />
      <ProductList search={search} />
    </div>
  );
}

export default App;
