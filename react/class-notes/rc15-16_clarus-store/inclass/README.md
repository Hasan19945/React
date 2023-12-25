Yüklü Paketler
- tailwindcss
- axios
- react-router-dom



**useLocation** hook'u, geçerli konumu bir nesne olarak döndürür. Bu nesne, konum yolunu, konum parametrelerini ve konum durumunu içerir.

`const { pathname, search, hash,state } = useLocation();`
Bu kod, pathname, search, state ve hash değişkenlerini ayarlar. pathname değişkeni konum URL'sinin yolunu içerir, search değişkeni konum URL'sinin arama parametrelerini içerir ve hash değişkeni konum URL'sinin hash parametresini içerir. state değişkeni useNavigate ile yönlendirme yapılırken veri gönderildiyse o veriyi içerir.

- `pathname`: Konum URL'sinin yolunu içerir. Örneğin, eğer URL "https://www.example.com/products" ise, `pathname` "/products" olacaktır.
- `search`: Konum URL'sindeki sorgu parametrelerini içerir. Örneğin, eğer URL "https://www.example.com/products?id=123&category=electronics" ise, `search` "?id=123&category=electronics" olacaktır.
- `hash`: Konum URL'sindeki "hash" kısmını içerir. Hash genellikle sayfanın belirli bir bölümüne doğrudan bağlantı yapmak için kullanılır. Örneğin, eğer URL "https://www.example.com/products#details" ise, `hash` "#details" olacaktır.
- `state`: Konum nesnesinin bir özelliği olarak mevcut durumu içerir. Bu durum, useNavigate ile yönlendirme yapılırken veri gönderildiyse o veriyi içerir.


### useReducer

useReducer Nedir?
useReducer, bir state yönetim yöntemidir. Bu hook, state'i değiştiren eylemleri tanımlayan ve bu eylemlere göre state'in nasıl güncelleneceğini belirleyen bir reducer fonksiyonu alır. Reducer fonksiyonu, mevcut state'i ve bir eylem (action) nesnesini alır, bu eyleme göre bir sonraki state'i döndürür.

#### Neden useReducer Kullanılır?

- Karmaşık State Durumları: Birden fazla state değişkeni arasında bağlantılar olduğunda veya state'in birden fazla parçasını aynı anda güncellemek gerektiğinde kullanışlıdır.
- State Mantığı: Reducer fonksiyonu, state'i güncellemek için bir şablon sağlar ve bu, hataları azaltabilir ve beklenmedik durumları önleyebilir.
- Ölçeklenebilirlik: Büyük uygulamalarda, state yönetimini basitleştirebilir ve state değişikliklerini daha izlenebilir hale getirebilir.
- Aynı anda birden fazla statei güncelleyebilirsiniz.

#### Nasıl Kullanılır?

- Reducer Fonksiyonunun Tanımlanması: State güncellemelerini tanımlayan bir reducer fonksiyonu oluşturulur.
- State ve Dispatch'in Alınması: useReducer, bir dispatch fonksiyonu ile birlikte mevcut state'i döndürür.
- Reducer'ın Kullanılması: dispatch fonksiyonu, belirli eylemleri tetikleyerek reducer fonksiyonunu çalıştırır ve state'i günceller.

Örnek bir useReducer kullanımı aşağıdaki gibi olabilir:

```javascript
import React, { useReducer } from "react";

// Başlangıç state'i
const initialState = {
  count: 0,
};

// Reducer fonksiyonu: State güncellemelerini belirler
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
```

// Component içinde useReducer kullanımı

```jsx
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};
export default Counter;
```

Burada useReducer hook'u, reducer fonksiyonu ve başlangıç state'i ile kullanılır. dispatch fonksiyonu, belirli bir eylemi tetikleyerek reducer fonksiyonunu çağırır ve state'i günceller.

##### type

type, bir eylemin veya bir action'ın tanımlayıcı bir özelliğidir. Genellikle eylemin ne tür bir değişiklik temsil ettiğini belirtmek için kullanılır. Örneğin, bir artırma işlemi için "INCREMENT", azaltma için "DECREMENT" gibi.

Örnek:

```javascript
dispatch({ type: "INCREMENT" });
dispatch({ type: "DECREMENT" });
```

##### payload

payload, bir eylemle birlikte taşınan ve state'i güncellemek için gerekli olan veridir. Eylemin kendisi dışında, state'i nasıl güncelleyeceğimizi belirten ekstra bilgiler içerebilir.

Örnek:

```javascript
dispatch({ type: "SET_USER", payload: { name: "John", age: 25 } });
```

Bu durumda, payload kullanıcı bilgilerini içerir ve "SET_USER" eylemiyle birlikte state içindeki kullanıcı bilgilerini güncellemek için kullanılabilir.

##### initialState

initialState, useReducer hook'uyla birlikte kullanılan başlangıç state'inin bir objesidir. Bu, uygulama ilk açıldığında veya bir bileşen render edildiğinde kullanılan varsayılan state değeridir.

Örnek:

```javascript
const initialState = {
  count: 0,
};
```

Bu örnekte, başlangıç state'i count adında bir değişkenle başlatılır ve varsayılan değeri 0 olarak atanır. Bu state, reducer fonksiyonu aracılığıyla güncellenebilir.

useReducerı doğrudan bir bileşende kullanabileceğimiz gibi aynı şekilde context bileşeni içerisinde de çağırabiliriz.

Bir bileşen içinde kullanıldığında, useReducer sadece o bileşene özgüdür ve bileşenin kendi state'ini yönetir. Böylece, bileşen içindeki state değişiklikleri sadece o bileşenin etkileşimlerini etkiler.

Ancak, useReducer'ı bir context içinde kullanarak, bu state'i birden çok bileşen arasında paylaşabilirsiniz. Context, React uygulamasındaki birden fazla bileşen tarafından erişilebilen ve kullanılabilen bir değer deposu gibi davranır. Bu, birden çok bileşen arasında veri veya state paylaşımını kolaylaştırır.

Doğrudan useReducer'ı global state management olarak düşünmemek önemlidir.
Küçük ölçekli uygulamalarda veya belirli bir bileşen ağacında paylaşılan state'i yönetmek için useReducer ve context kombinasyonu oldukça etkili olabilir. Bu şekilde, state'i küçük bir bölgede yönetmek istediğinizde, bunu sağlamak için iyi bir araç olabilir. 