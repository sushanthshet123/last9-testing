import * as React from "react"
import PropTypes from "prop-types"
import ProductDetail from "./productDetail"
import { productData } from "../data"
import { Link } from "gatsby"

const Product = () => (
  <>
    {productData.map((data, index) => (
      <div
        key={data.name}
        className="grid md:grid-cols-12 max-w-6xl mx-auto gap-4 px-5"
      >
        <div className={`${data.orderFirst} mx-auto md:pt-12 hidden md:block col-span-5`}>
          <ProductDetail data={data.productDetail} />
        </div>
        <div className={`block md:hidden mx-auto md:pt-12`}>
          <ProductDetail data={data.productDetail} />
        </div>
        <div className={`mx-auto hidden md:block col-span-2 ${index === 0 ? "-mt-20" : "-mt-28"}`}>
          <img
            src="/home/product/product-arrow.svg"
            className="hidden md:block mx-auto h-72"
          />
          <img src={data.logo} className="mx-auto pt-2 h-28" />
        </div>
        <div className="mx-auto md:hidden block order-first md:order-none">
          <img
            src="/home/product/mobile-product-arrow.svg"
            className=" mx-auto"
          />
          <img src={data.logo} className="mx-auto pt-2 h-28" />
        </div>
        <div className={`${data.orderLast} mx-auto md:pt-12 hidden md:block col-span-5`}>
          <img src={data.image} className="mx-auto h-full" />
        </div>
        <div className={`mx-auto md:pt-12 block md:hidden ${data.name === "compass" ? "pl-16" : ""}`}>
          <img src={data.image} className="mx-auto h-full" />
        </div>
        {/* <button
          type="button"
        > */}
        <Link to={data.productDetail.href}
          className="flex md:hidden justify-center items-center
          md:my-4 mt-2 mb-4 px-3 py-2 text-sm font-medium rounded-md text-white hover:bg-black primary-btn">
          {data.productDetail.buttonLabel}
        </Link>
        {/* </button> */}
      </div>
    ))}
  </>
)

Product.propTypes = { siteTitle: PropTypes.string }

Product.defaultProps = { siteTitle: `` }

export default Product
