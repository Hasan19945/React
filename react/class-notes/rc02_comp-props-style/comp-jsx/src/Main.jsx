 //* Named export ile paylasima acildi

//* Public klasöründe olmayan resimlere erisebilmek icin import yapmak gerekir. */}
import bird from "./img/bird.jpg"

//* JSX'de stillendirme farkli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3-) Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Module CSS, Material UI, Styled Component, Sass, Bootstrap, Tailwind, Emotion, Ant Design v.b harici kutuphaneler kullanilabilir.

export const Main = () => {
  //? Local style objesi (Harici bir dosyadan da import edilebilir)
  const parStyle = {
    fontFamily: "tahoma",
    color: "#333",
    fontSize: "1.2rem",
  }

  const imgStyle = {
    width: "300px",
    borderRadius: "10px",
    marginRight: "20px",
  }

  return (
    <main>
      {/* inline-CSS (key-value), notasyon olarak camelCase */}
      <h1 style={{ color: "white", backgroundColor: "red" }}>MAIN SECTION</h1>

      <p style={parStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iure,
        rerum doloremque magnam perferendis itaque consequatur vero quasi
        eveniet alias!
      </p>

      <p style={parStyle}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
        dolorum?
      </p>

      <img
        src="https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_1280.jpg"
        alt="owl"
        style={imgStyle}
      />
      <img
        src="https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194_640.jpg"
        alt="macaw"
        style={imgStyle}
      />

      <img src={bird} alt="humming" style={imgStyle} />

      {/* Public klasöründeki resimlere doğrudan ulaşıbildiği için yol vererek eriştik. /Ana dizin) */}
      <img src="./images/bird2.jpg" alt="bird2" style={imgStyle} />
    </main>
  )
}
