import Photo from "./Photo"

const Card = ({ name, tel, src }) => {
  //   console.log(props)
  return (
    <div>
      <h2>Hello {name}</h2>
      <Photo src={src} />
      <p>Telephone: {tel}</p>
    </div>
  )
}

export default Card

// import React from 'react'

// const Props = ({ad, soyad, arama}) => {
//   return (
//     <div>
//       <h1>Hei{ad}  </h1>
//       <h2> Soyadiniz {soyad}'miydi? </h2>
//       <p>Telefon: {arama} </p>
//     </div>
//   )
// }

// export default props

// import React from 'react'

// const yeni Props = ({isim, soyisim, src}) => {
//   return (
//     <div>
//       <h1> isim {isim}</h1>
//       <h2> oyisim {soyisim}</h2>
//       <Foto src={src} />
//     </div>
//   )
// }

// export default yeni Props

// const Component = () => {
//   return (
//     <>
    
//     </>

//   )
// }

// export default Component