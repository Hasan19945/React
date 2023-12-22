import Footer from "./components/Footer"
import Navs from "./components/Navs"
import About from "./pages/About"
import Home from "./pages/Home"
import People from "./pages/People"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import PersonDetail from "./pages/PersonDetail"
import Login from "./pages/Login"
import PrivateRouter from "./pages/PrivateRouter"
// import { LoginContext } from "./context/LoginProvider"
// import { useState } from "react"

import LoginProvider from "./context/LoginProvider"

function App() {
  // const [user, setUser] = useState({ email: "", password: "" })

  return (
    //? 2.Uygulamayi LoginCOntext ile sarmaladik.
    // <LoginContext.Provider value={{ user, setUser }}>
    <LoginProvider>
      <BrowserRouter>
        <Navs />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />

          <Route path="people" element={<PrivateRouter />}>
            <Route path="" element={<People />} />
            <Route path=":id" element={<PersonDetail />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LoginProvider>

    // </LoginContext.Provider>
  )
}

export default App
