import React, { useState } from "react"
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap"
import "./Login.css"
import auth from "../Auth"

export default function Signup(props) {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function validateForm() {
    return username.length > 0 && email.length > 0 && password.length > 0
  }

  function handleSubmit(event) {
    event.preventDefault()
    let credentials = { username: username, password: password }
    auth.signup(
      credentials,
      () => {
        props.history.push("/home")
      },
      () => {
        console.log("Wrong credentials")
        alert("Credenziali errate, prego riprovare")
      }
    )
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="username">
          <FormLabel>Username</FormLabel>
          <FormControl
            autoFocus
            type="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block disabled={!validateForm()} type="submit">
          Register
        </Button>
      </form>
    </div>
  )
}
