import * as React from "react"
import { PropTypes } from "prop-types";


const Button = (props) => {

  return (
    <a href={props.href} target="_blank" rel="noreferrer"
      className={`rounded-md manrope-semibold hover:bg-black px-6 py-3 block md:inline-block mx-4 md:mx-0 ${props.buttonStyle} primary-btn`}>Start a Trial</a>
  )
}

export default Button

Button.propTypes = {
  href: PropTypes.string,
  buttonStyle: PropTypes.string,

}
Button.defaultProps = {
  href: ``,
  buttonStyle: ``,
}