// import Header from "./components/header/Header";
import Products from "./components/products/ProductsList";
import { products, categories } from "./helper/data";
import "./App.scss";
import HeaderH from "./components/headerHam/HeaderH";

function App() {
  console.log(products);
  return (
    <div>
      {/* <Header categories={categories} text="Products List" /> */}
      <HeaderH categories={categories} />
      <Products products={products} />
    </div>
  );
}

export default App;
