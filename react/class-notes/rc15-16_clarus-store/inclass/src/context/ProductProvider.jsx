import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

//!1 contexti oluştur
const ProductContext = createContext();
//? contexte ihtiyaç duymamızın sebebi detail sayfasına gittikten sonra geri geldiğimizde hem kullanıcının yazdığı query hem de api den gelen sonuçların kaybolmamasıni istememiz.
//! Ayrıca products sayfasında yapsaydık veri çekme işlemini her sayfa render olduğunda arama olmadığı halde apiye istek atacaktı.

//!2 sarmalayıcı componenti oluştur. Saklanan veriler,fonksiyonlar burada tanımlanır ve buradan paylaşılır
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);//veri gelene kadar kullanıcıya boş sayfa göstermek yerine loading göstermek için
  const [search, setSearch] = useState("");//*input için burada oluşturduk ki products sayfası render olduğunda userın yazdığı değer kaybolmasın.
  console.log(search);
  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await axios(
        `https://dummyjson.com/products/search?q=${search}`
      );//! query boş string olduğunda api default olan 30 ürünü getiriyor.
      console.log(data);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [search]); //! search statei değiştikçe getData fonksiyonu çalışsın

  return <ProductContext.Provider value={{products,loading,search,setSearch}}>{ children }</ProductContext.Provider>;
};

export default ProductProvider;

//! zorunlu değil tükteim yaparken sadece kolaylık sağlıyor
export const useProducts = () =>{
    return useContext(ProductContext)
}
//! react hooklarını javascript fonksyionları içerisinde kullanamadığımız için custom hooklara ihtiyaç duyarız.
//? custom hooklar use keywordü ile başlamak zorunda
//* custom hooklar jsx return etmez.


// //! Reducer Lı Kullanım
// import axios from "axios";
// import React, { createContext, useContext, useEffect, useReducer } from "react";

// // statelerin oluşturulması
// const initialState = {
//   products: [],
//   loading: false,
//   search: "",
// };

// // Reducer fonksiyonu: State'i güncelleyen actionlar
// const reducer = (state, { type, payload }) => {
//   switch (type) {
//     case "SET_PRODUCTS":
//       return { ...state, products: payload };
//     case "SET_LOADING":
//       return { ...state, loading: payload };
//     case "SET_SEARCH":
//       return { ...state, search: payload };
//     default:
//       return state;
//   }
// };

// // Context oluşturulması
// const ProductContext = createContext();

// // ProductContext sarmalı için ProductProvider bileşeni
// const ProductProvider = ({ children }) => {
//   // useReducer a reducer ı ve statelerimizi hem tanıttık hemde onun içerisinden state yani asıl verilerimiz ve statelerimizi değiştircek olan dispatchi aldık
//   const [state, dispatch] = useReducer(reducer, initialState);

//   // State değerlerinin ayrıştırılması
//   const { products, loading, search } = state;

//   const getProducts = async () => {
//     dispatch({ type: "SET_LOADING", payload: true }); // loading stateini güncelledik
//     try {
//       const { data } = await axios(
//         `https://dummyjson.com/products/search?q=${search}`
//       );
//       dispatch({ type: "SET_PRODUCTS", payload: data.products }); // gelen ürünler i dispatch ile stateimize aktarıyoruz.
//     } catch (error) {
//       console.log(error);
//     } finally {
//       dispatch({ type: "SET_LOADING", payload: false }); // laoding stateini tekrar false a çekiyoruz
//     }
//   };

//   const setSearch = (value) => dispatch({ type: "SET_SEARCH", payload: value }); //! inputta kullanmak için setSearch diye bir fonksiyon oluşturduk. Bunun yerine dispatchi içerde de kullanabiliriz.
//   useEffect(() => {
//     getProducts();
//   }, [search]);

//   // ProductContext.Provider ile
//   return (
//     <ProductContext.Provider
//       value={{
//         products,
//         loading,
//         search,
//         setSearch,
//       }}
//     >
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export default ProductProvider;

// export const useProducts = () => {
//   return useContext(ProductContext);
// };
