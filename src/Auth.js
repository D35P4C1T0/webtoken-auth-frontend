import axios from "axios"

class Auth {
  constructor() {
    this.authenticated = false
    this.TOKEN = ""
    this.username = ""
  }

  login(credentials, cb) {
    let content = {
      username: credentials.username,
      password: credentials.password
    }

    // let url = "http://localhost:3000/users/" + credentials.username

    // if (!process.env.backend_address) {
    //   console.log("no backend address")
    // }

    // let url = process.env.backend_address + "/users/" + credentials.username
    let url =
      "https://webtoken-mockup--d35p4c1t0.repl.co" +
      "/users/" +
      credentials.username
    // console.log(url)

    axios({
      method: "post",
      url: url,
      data: content,
      config: { headers: {} }
    })
      .then(response => {
        console.log("RESPONSE RECEIVED", response)
        if (response.data.authenticated === true) {
          console.log(content.username, "is authenticated and has logged in")
          this.authenticated = true
          this.TOKEN = response.data.token
          this.username = content.username
          cb()
        }
      })

      .catch(err => console.log("AXIOS ERROR", err))
  }

  signup(credentials, cb) {
    let content = {
      username: credentials.username,
      password: credentials.password
    }

    // let url = 'http://localhost:3000/users'

    // if (!process.env.backend_address) {
    //   console.log("no backend address")
    // }

    // let url = process.env.backend_address + "/users"
    let url = "https://webtoken-mockup--d35p4c1t0.repl.co" + "/users"
    // console.log(url)

    axios({
      method: "post",
      url: url,
      data: content,
      config: { headers: {} }
    })
      .then(response => {
        console.log("RESPONSE RECEIVED", response)
        if (response.statusText === "OK") {
          this.authenticated = true
          cb()
        }
      })
      .catch(err => console.log("AXIOS ERROR", err))
  }

  logout(cb) {
    this.authenticated = false
    cb()
  }

  isAuthenticated() {
    return this.authenticated
  }
}

export default new Auth()
