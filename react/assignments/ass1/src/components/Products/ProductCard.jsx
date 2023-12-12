import React from "react";

// const ProductCard = ({ product }) => {
//   const { id, title, image, price } = product;
//   return (
//     <div>
//       <div>
//         <h3>{price}</h3>
//       </div>
//       <img src={image} alt={title} width="100px" />
//       <div>
//         <h2>{title}</h2>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

const ProductCard = ({id,title,price, description, category, image, rating}) => {
  const {rate,count}=rating
  //   console.log(props);
  return (
    <div className="card">
      <div className="price">
        <h3>{price} $</h3>
        <h5>{rate}  {count}</h5>
      </div>
      <img src={image} alt={title} />
      <div className="card__over">
        <h2>{title}</h2>
        <h5>{description}</h5>
      </div>
    </div>
  );
};

export default ProductCard;
