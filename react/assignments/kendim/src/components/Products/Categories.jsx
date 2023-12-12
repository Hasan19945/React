import React from 'react'
import { categories } from "../../helper/data";
const Categories = () => {
  return (
    <div className='title'>
      {categories.map((item) => (
        <div className="btn-item" key={item}>
          <button>{item}</button>
        </div>
      ))}
    </div>
  );
}

export default Categories