import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import { useState } from "react"

const Forms = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleFormSubmit = (e) => {
    // console.log(e.target)
    e.preventDefault()
    alert(`
      username: ${username},
      email: ${email},
      password: ${password}
   `)

    setEmail("")
    setPassword("")
    setUsername("")

    //? ileride bir submit islemin neticesinde verilerin nasıl post edilebileceğini gostermek adina eklenmistir.
    //? const res = axios.post("url", { username, password, email })
    //* Alternatif olarak
    //? fetch("url", { method: "POST, data: {username, password, email} })
    //? .then()
  }

  console.log(password)
  return (
    <Container className="mt-4">
      <Form onSubmit={handleFormSubmit}>
        <h1 className="text-success">FORMS</h1>

        <Form.Group className="mb-3">
          <Form.Label>
            {username && <span className="fw-bold">Hello {username}</span>}
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            onChange={handleUsername}
            value={username}
            id="username"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            Email: <span className="fw-bold">{email}</span>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            //? OnChange event'ı input degeri her degistiginde tetiklenir. Biz de yazdıgımız event handler araciligi ile State'i guncelleyebilmis oluruz.
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Forms
