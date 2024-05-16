import { useContext } from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { LoginContext } from "../context/LoginContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
  // const [user, setUser] = useState({ email: "", password: "" })

  //? 3. Login Context'in tüketilmesi (consuming)
  const { user, setUser } = useContext(LoginContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const response =  fetch("https://api-prod.fiko.no/v1/has/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password
        })

      })
      

      
      console.log("posttan sonrasi")
    // navigate("/people")
    // navigate(-1)  //? geldigin yere geri don.

    if (response.ok) {
      
      console.log("responsedan sonrasi")
    // navigate("/people")
      // İstek başarılı ise kullanıcıyı yönlendir
      navigate("/people")
    } else {
      // İstek başarısız ise hata mesajını göster veya gerekli işlemi yap
      console.error("Login failed:", response.statusText)
      // Örneğin, kullanıcıya hata mesajını göstermek için uygun bir durum yönetimi yapılabilir.
    }

  }

  console.log(user)
  return (
    <Container>
      <h1 className="text-center mt-4">LOGIN PAGE</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={user?.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={user?.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>
        <Container className="text-center">
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    </Container>
  )
}

export default Login
