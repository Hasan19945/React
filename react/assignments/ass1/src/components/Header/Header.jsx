import React from "react";
import { categories } from "../../helper/data";
import "./Header.scss";

const Header = () => {
  console.log(categories);
  return (
    <div className="title">
      <h1>Products List</h1>
    </div>
  );
};

export default Header;
