import * as React from "react"
import PropTypes from "prop-types"
import Product from "./product"

const Products = () => (
  <>
    <section className={`flex items-center justify-center`}>
      <div className="max-w-6xl mx-auto px-4 md:pt-16 pt-8 sm:px-6 my-auto">
        <div className="text-center py-5">
          <h1 className="flex lg:w-3/5 heading tracking-tight manrope-extrabold mx-auto text-black">
            More peace time, less war time
          </h1>
        </div>
      </div>
    </section>
    <div className="flex lg:max-w-xl px-5 lg:px-0 mx-auto text-center manrope-regular">
      <p className="body-letter-spacing text-sm md:text-base">
        Every engineer has been pulled into a war room. These are puzzle
        assembling exercises. 10 chrome tabs, frantic searching, and wondering
        which microservice has gone down, where.
      </p>
    </div>
    <div className="lg:mb-4">
      <p className="text-center pt-5 manrope-regular text-sm md:text-base">we want to change that</p>
    </div>
    <div className="md:pt-24 pt-5">
      <Product />
    </div>
  </>
)

Products.propTypes = { siteTitle: PropTypes.string }

Products.defaultProps = { siteTitle: `` }

export default Products
