import { useContext } from "react"
import { createContext, useState } from "react"

//? 1. Login bilgilerini sakalyacak bir context olusturduk.
const LoginContext = createContext()

//? 2. Sarmalama
const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({ email: "", password: "" })

  const values = {
    user,
    setUser,
  }
  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  )
}
//? Consuming için bir custom hook yazıyoruz.
export const useLoginContext = () => {
  return useContext(LoginContext)
}

export default LoginProvider

/* <Provider>   //? App prvider'ın child (props.children)
  <App/>
</Provider> */
