import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <p>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/terms">Terms</Link>
      </p>
      <p>copyright &copy 2022;</p>
    </footer>
  )
}

export default Footer
