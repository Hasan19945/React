import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import { useState } from "react"

const FormsObject = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  })

  //? destr.
  const { username, password, email } = data

  const handleData = (e) => {
    // console.log(e.target.id)
    // console.log(e.target.name)
    //? objemizin key Degerinin degisken olmasını saglamak için square bracket yontemi ile e.target.id parametresini kullandik
    setData({ ...data, [e.target.name]: e.target.value })
  }

  // console.log(data)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    alert(`
      username: ${username},
      email: ${email},
      password: ${password}
   `)
    //? state'i sil
    setData({ username: "", email: "", password: "" })
  }

  console.log(data)
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
            onChange={handleData}
            value={username || ""}
            id="username"
            name="username"
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
            onChange={handleData}
            value={email || ""}
            id="email"
            name="email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleData}
            value={password || ""}
            id="password"
            name="password"
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default FormsObject
