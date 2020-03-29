import React, { Component } from "react"
import Login from "./containers/Login"
import { Home } from "./components/Home"
import { Contact } from "./components/Contact"
import { NoMatch } from "./components/NoMatch"
import { Layout } from "./components/Layout"
import { NavigationBar } from "./components/NavigationBar"
import { Header } from "./components/Header"
import { ProtectedRoute } from "./components/ProtectedRoute"
import "./App.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Signup from "./containers/Signup"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Header />
          <Layout>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/signup" component={Signup} />
              <ProtectedRoute path="/home" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    )
  }
}

export default App
