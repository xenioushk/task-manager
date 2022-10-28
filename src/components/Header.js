import React from "react"
import Button from "./Button"
import PropTypes from "prop-types"

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p style={{ color: "yellow", backgroundColor: "black" }}> Hello From here.</p>
      <Button color="green" text={showAdd ? "close" : "add"} onClick={onAdd} />
    </div>
  )
}

// Optional Settings.

Header.defaultProps = {
  title: "Task Traker",
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
