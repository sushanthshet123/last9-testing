import * as React from "react"
import PropTypes from "prop-types"

const Cta = () => (
  <>
    <section className={`flex items-center justify-center`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 my-auto">
        <div className="text-center py-10">
          {/* <h4 className="font-mono hidden md:block">Backed By</h4> */}
          <div className="relative">
            <h1 className="flex md:text-5xl text-4xl max-w-3xl manrope-extrabold mx-auto text-black heading tracking-tight">
              Deprecating your <br /> known unknowns to the Last9
            </h1>
            <img src="/home/cta/heart.svg" className="absolute md:-right-10 md:bottom-1 right-8 bottom-1" />
          </div>
        </div>
      </div>
    </section>
    <div className="flex justify-center px-10 md:px-0">
      <div className="border border-black p-6 w-52">
        <img src="/home/cta/sequoia.svg" className="h-5 mx-auto" />
      </div>
      <div className="border-y border-r border-black p-5 w-52">
        <img src="/home/cta/better.svg" className="h-8 mx-auto" />
      </div>
    </div>
  </>
)

Cta.propTypes = { siteTitle: PropTypes.string }

Cta.defaultProps = { siteTitle: `` }

export default Cta
