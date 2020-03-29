import React from "react"
import { Jumbotron as Jumbo, Container } from "react-bootstrap"
import styled from "styled-components"
import headerImage from "../assets/bg.jpg"

const Styles = styled.div`
  .jumbo {
    background: url(${headerImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 12em;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.75;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`

export const Header = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome</h1>
        <p>
          Learn to code by stealing snippets <br></br> and stock images
        </p>
      </Container>
    </Jumbo>
  </Styles>
)
