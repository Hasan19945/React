import { useState } from "react"

const KeyboardClipboard = () => {
  const [icerik, setIcerik] = useState("")

  const handleKeyDown = (e) => {
    console.log(e.keyCode)
    if (e.keyCode > 47 && e.keyCode < 58) {
      alert("Buraya rakam girilemez")
      e.preventDefault() //? default davranışı kapatarak girilen rakimin input'a basilmasi engellenmis oldu
    }
  }

  const handleCopy = (e) => {
    alert("Kopyalama yasaktir")
    e.preventDefault()
  }

  const handleCut = (e) => {
    alert("Kesme islemi yasaktir")
    e.preventDefault()
  }

  const handlePaste = (e) => {
    e.target.style.fontFamily = "Courier New"
    e.target.style.fontSize = "1.2rem"
    e.target.style.border = "1px solid red"
  }

  return (
    <div className="container mt-4">
      <h2>Keyboard Events</h2>

      <input
        type="text"
        className="form-control"
        onChange={(e) => setIcerik(e.target.value.toLocaleUpperCase())}
        value={icerik} //? HEP BUYUK HARF
        onKeyDown={handleKeyDown}
      />

      <div className="mt-3">
        {/* hep kucuk harf */}
        <p>{icerik.toLocaleLowerCase()}</p>
      </div>

      <div>
        <textarea
          className="form-control"
          name="textarea"
          id="area"
          cols="30"
          rows="10"
          onCut={handleCut}
          onCopy={handleCopy}
          onPaste={handlePaste}
        ></textarea>
      </div>
    </div>
  )
}

export default KeyboardClipboard
