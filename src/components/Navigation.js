import React from "react"
import { Link } from "react-router-dom"

function Navigation() {
  return (
    <div>
      <Link to="/">home</Link>
      <Link to="about">about</Link>
    </div>
  )
}

export default Navigation
