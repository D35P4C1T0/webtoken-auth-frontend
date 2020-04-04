import React from "react"
import { Link } from "react-router-dom"
import { Nav, Navbar } from "react-bootstrap"
import auth from "../Auth"
import styled from "styled-components"

const Styles = styled.div`
  .navbar {
    background-color: #333;
  }

  a,
  .navbar-brand,
  .navbar-collapse .navbar-nav .nav-link {
    color: white;

    &:hover {
      color: teal;
    }
  }
`

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" class="bg-dark">
      <Navbar.Brand href="/">Material Login</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/home">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact">Contacts</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link
                onClick={() => {
                  auth.logout(() => {})
                }}
                to="/"
              >
                Logout
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)
