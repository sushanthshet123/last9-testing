import * as React from "react"
import PropTypes from "prop-types"
import Card from "./card"
import * as style from "../index.module.css"
import TestimonialSlider from "./testimonialSlider"

const Testimonials = () => (
  <>
    <section className={`${style.testimonial} items-center justify-center md:flex hidden`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 my-auto">
        <div className="text-center pb-20">
          {/* <h4 className="light-green font-mono">Words from clients</h4> */}
          <h1 className="heading tracking-tight lg:w-3/5 manrope-extrabold mx-auto text-white">
            Empowering engineering teams
          </h1>
        </div>
        <div>
          <Card />
        </div>
      </div>
    </section>
    <section className="dark-blue-background block md:hidden py-10">
      <div className="my-auto">
        <div className="text-center pt-10 md:pb-5 pb-8">
          {/* <h4 className="light-green font-mono">Words from clients</h4> */}
          <h1 className="heading tracking-tight w-4/5 font-bold mx-auto text-white">
            Empowering engineering teams
          </h1>
        </div>
        <div>
          <TestimonialSlider />
        </div>
      </div>
    </section>
  </>
)

Testimonials.propTypes = { siteTitle: PropTypes.string }

Testimonials.defaultProps = { siteTitle: `` }

export default Testimonials
