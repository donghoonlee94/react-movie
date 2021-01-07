import React from "react"
import { HashRouter, Route } from "react-router-dom"
import About from "./routes/About"
import Home from "./routes/Home"
import Navigation from "./components/Navigation"

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" component={Home} exact={true}></Route>
      <Route path="/about" component={About}></Route>
    </HashRouter>
  )
}

export default App
