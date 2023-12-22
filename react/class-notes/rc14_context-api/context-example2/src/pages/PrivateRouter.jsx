import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
// import { LoginContext } from "../context/LoginProvider"
import { useLoginContext } from "../context/LoginProvider"

const PrivateRouter = () => {
  //TODO: global state'den okunmali
  // const { user } = useContext(LoginContext)
  const { user } = useLoginContext()
  return user.email && user.password ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRouter
