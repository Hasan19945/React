const Event = () => {
  const handleTikla = (e) => {
    alert("Tiklandi")
    console.log(e.target)
    console.log("Name:", e.target.name)
    console.log("ID:", e.target.id)
  }

  const handleSil = function (message) {
    console.log(message)
  }

  //? Statik bir degisken
  let message = "React"

  function handleDegistir() {
    message = "FS15 React Ogreniyor"
    console.log(message)
  }

  //? Bir componentin return kismi 3 farkli yontem ile yeniden render edilir.
  //? 1- Herhangi bir state degisirse
  //? 2- Props degisirse
  //? 3- Refresh force edilirse (tercih edilen bir durum olmaz)
  return (
    <div>
      <h1>Events</h1>
      <h2>{message}</h2>
      <button onClick={handleTikla} id="btn" name="my-button">
        Tikla
      </button>

      {/* Eger bir event fonksiyonunun paremetresi olmasi gerekiyorsa
      bu fonksiyon bir arrow fonks. tarafindan  cagrilmalidir. Aksi
      takdirde event fonksiyonu event gerceklesmeden cagirilir */}
      <button onClick={() => handleSil(message)}>Sil</button>

      <button onClick={handleDegistir}>Degistir</button>
    </div>
  )
}

export default Event

//! message console'da guncellendigini ancak DOM'da guncellenmedigini gorduk.
//* Bunun sebebi REACT'in aksi belirtilmedigi surece elementleri
//* static olarak kabul etmesinden kaynaklanir.

//* React bunu DOM islemlerini minimize etmek icin yapmaktadir.
//* REACT'a hangi elementleri interaktif oldugu belirtilmelidir.
//! React'a elementlerin interaktif oldugunu belirtmek icin state'ler kullanilir.
//! State, elementlerin degisiklik durumlarini tutan nesnelerdir.
//? ReactJs'de state'leri kullanmak icin  2 ayri Component yapisi bulunmaktadir.
//? 1. Hooks (Functional Components).
//? 2. Statefull Classes (Class Components).

//? Biz su ana kadar uygulamalarimizda Fonksiyonel Component'leri kullandik.
//? Yaygin kullanim Fonksiyonel Component'lerdir.
