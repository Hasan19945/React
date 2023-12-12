import "./Products.scss";
import { products } from "../../helper/data";
import ProductCard from "./ProductCard";
const ProductsList = ({ search }) => {
  console.log(products);
  console.log(search);
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filteredProducts);
  return (
    <div className="products-list">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsList;
