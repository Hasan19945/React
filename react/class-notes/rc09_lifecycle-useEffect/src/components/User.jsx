import { useState, useEffect } from "react"
import axios from "axios"

const User = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    picture: "",
    dob: "",
    location: "",
    phone: "",
  })
  const url = "https://randomuser.me/api/"

  const getUser = () => {
    axios(url)
      .then((res) => setUser(res.data.results[0]))
      .catch((err) => console.log(err))
  }

  //? componentDidMount
  useEffect(() => {
    const sure = setInterval(getUser, 5000)
    getUser()

    //? componentWillUnmount (cleanup function)
    return () => {
      console.log("Timer iptal edildi")
      clearInterval(sure)
    }
  }, [])

  console.log(user)

  //? user objesinin destr.
  const {
    name: { first, last },
    email,
    picture: { large },
    dob: { date },
    location: { city },
    phone,
  } = user
  return (
    <div>
      <img className="rounded-circle" src={large} alt="img" />
      <p>Hi, My name is</p>
      <h1>
        {first} {last}
      </h1>
      <h3>{email}</h3>
      <h5>{date}</h5>
      <h5>{city}</h5>
      <h5>{phone}</h5>
      <button className="btn btn-success" onClick={getUser}>
        Get User
      </button>
    </div>
  )
}

export default User
