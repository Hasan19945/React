import Footer from "./Footer"
import Header from "./Header"
import { Main } from "./Main"

//* Harici css dosyalari import deyimi ile bir component baglanmis olur
import "./App.css"

function App() {
  return (
    <>
      <h1>React App</h1>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
