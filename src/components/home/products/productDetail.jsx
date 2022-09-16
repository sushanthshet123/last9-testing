import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "@reach/router"

const ProductDetail = (props) => {
  const data = props.data
  return (
    <>
      <div>
        <h1 className="md:text-5xl text-3xl manrope-extrabold md:leading-tight" dangerouslySetInnerHTML={{ __html: data.title }}></h1>
        <p className="py-6 manrope-regular body-letter-spacing text-sm md:text-base">{data.text}</p>
        <p className="md:pb-8 manrope-regular textbody-letter-spacing text-sm md:text-base" dangerouslySetInnerHTML={{ __html: data.description }}>
        </p>
        <Link to={data.href} className="mt-5">
          <button
            type="button"
            className="md:flex hidden justify-center items-center px-4 py-3 text-sm manrope-semibold rounded-md text-white hover:bg-black primary-btn"
          >
            {data.buttonLabel}
          </button>
        </Link>
      </div>
    </>
  )
}
ProductDetail.propTypes = { data: PropTypes.obj }
ProductDetail.defaultProps = { title: `` }

export default ProductDetail
