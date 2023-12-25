import React from "react";
import {useNavigate} from "react-router-dom"
const ProductCard = ({item}) => {
  const {title,category,thumbnail,price} = item;
  const navigate = useNavigate()
  return (
    <div className="cursor-pointer" onClick={()=>navigate(`/dashboard/products/${title}?detail=${item.id}`,{state:item}) }>
      <div className="w-full rounded-md bg-gray-200 hover:opacity-75 lg:h-80">
        <img
          src={thumbnail}
          alt={title}
          title={title}
          className="h-[200px] w-full object-fit lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div className="flex-1">
          <h3 className="text-sm text-gray-700 line-clamp-1">{title}</h3>
          <p className="mt-1 text-sm text-gray-500 line-clamp-1">{category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{price} $</p>
      </div>
    </div>
  );
};

export default ProductCard;




//! çift dinamik routela gönderme id li kullanım
// import React from "react";
// import {useNavigate} from "react-router-dom"
// const ProductCard = ({item}) => {
//   const {title,category,thumbnail,price} = item;
//   const navigate = useNavigate()
//   return (
//     <div className="cursor-pointer" onClick={()=>navigate(`/dashboard/products/${title}/${item.id}`,{state:item}) }>
//       <div className="w-full rounded-md bg-gray-200 hover:opacity-75 lg:h-80">
//         <img
//           src={thumbnail}
//           alt={title}
//           title={title}
//           className="h-[200px] w-full object-fit lg:h-full lg:w-full"
//         />
//       </div>
//       <div className="mt-4 flex justify-between">
//         <div className="flex-1">
//           <h3 className="text-sm text-gray-700 line-clamp-1">{title}</h3>
//           <p className="mt-1 text-sm text-gray-500 line-clamp-1">{category}</p>
//         </div>
//         <p className="text-sm font-medium text-gray-900">{price} $</p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// Detail sayfasına veri taşıma yolları

//! 1.yol useNavigateile taşıyıp useLocation ile karşılama(bizim yaptığımız)
//? 2.yol bilgileri globale aktarıp detail sayfasında globalden çekme. Örneğin; detail diye bir state açıp onu burada tıklama gerçekleştiğinde doldurup details sayfasından çekip alma
//+ 3.yol ve güvenli yol yönlendirme yaparken id bilgisini veya ürüne ait veri çekebileceğimiz bir değeri(slug gibi) url e ekleyip ilgili sayfada gelen useParams ile ilgili id bilgisini yakalayıp apiye istek atma