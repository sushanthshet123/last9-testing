/* eslint-disable no-console */
import React from "react"
import { PropTypes } from "prop-types"
import * as styles from "./product.module.css"

const ProductMetrics = (props) => {
  return (
    <div className="mb-6 lg:mb-0">
      <h1 className={`${props.color} text-2xl pb-5 md:pb-8 manrope-extrabold`}>
        {props.heading}
      </h1>
      {/* <Fade top> */}
      <div
        className={`
       transition delay-250 duration-1000 ease-in-out text-white text-sm md:text-base body-letter-spacing visible opacity-100
       manrope-regular body-letter-spacing ${styles.paragrapgspacing}`}
        dangerouslySetInnerHTML={{ __html: props.description }}
      ></div>
      {/* </Fade> */}
    </div>
  )
}

export default ProductMetrics

ProductMetrics.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.color,
  scrollStart: PropTypes.string,
  scrollEnd: PropTypes.string,
}
ProductMetrics.defaultProps = {
  heading: ``,
  description: ``,
  color: ``,
  scrollStart: "",
  scrollEnd: "",
}
