//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede tanimlanmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react/hooks#state-hooks
//* =============================================================

import { useState } from "react"

const UseStateCounter = () => {
  // let sayac = 0
  //? useState hook'u ile sayac adinda bir state tanimladik.
  const [sayac, setSayac] = useState(0)

  console.log(sayac)

  const handleSayac = () => {
    // sayac = sayac + 1
    setSayac(sayac + 1)
  }

  const handleAzalt = () => {
    if (sayac > 0) {
      setSayac(sayac - 1)
    } else {
      alert("Sayac negatif deger olamaz")
    }
  }

  return (
    <div>
      <h1>UseState Sayac</h1>
      <h2>Sayac:{sayac}</h2>

      <button onClick={handleSayac}>Arttir</button>
      {/* Eger setSayac metodunu callback ile yazmazsak bu metot ilk acilistan itibaren doğrudan cagirilmis olur. Bu durumda da sayac state'ini gunceller. State guncellendigi icinde component re-render olur. Re-render ise yeniden setSayac araciligi ile state'in guncellenmesine yol acar ve sonsuz donguye girer */}

      {/* <button onClick={() => sayac > 0 && setSayac(sayac - 1)}>Azalt</button> */}

      {/* <button
        onClick={() => {
          if (sayac > 0) {
            setSayac(sayac - 1)
          } else {
            alert("Sayac negatif deger olamaz")
          }
        }}
      >
        Azalt
      </button> */}

      {/* Alternatif yontem */}

      <button onClick={handleAzalt}>Azalt</button>

      <button onClick={() => setSayac(0)}>Sil</button>
    </div>
  )
}

export default UseStateCounter
