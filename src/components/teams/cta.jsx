import React from "react"

export default function CTA() {
  return (
    <div className="product-bg pt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 my-auto py-10">
        <div className="text-center pb-20">
          <h4 className="light-green manrope-extrabold text-2xl">Our Mission</h4>
          <h1 className="md:text-5xl text-3xl max-w-xl manrope-extrabold mx-auto text-white pt-3">
            Make running systems at scale, fun, and embarrassingly easy.
          </h1>
          <a href="/schedule-demo">
            <button
              type="button"
              className="flex mx-auto justify-center items-center my-10 px-6 py-3 lg:py-3 text-sm manrope-semibold rounded-md text-black !bg-white"
            >
            Want a demo?
            </button>
          </a>
          <div className="max-w-xl mx-auto pt-5">
            <h4 className="light-green manrope-extrabold text-2xl">Say hello?</h4>
            <h1 className="flex justify-center md:text-5xl text-3xl pt-3 max-w-xl manrope-extrabold mx-auto text-white">
              <img src="/teams/mail-icon.svg" className="h-10 md:pt-2 p-2 md:p-0 pr-4 md:pr-4" /><a href="mailto:hi@last9.io"><span>hi@last9.io</span></a>
            </h1>
            <hr className="w-7/12 border-color mx-auto mt-2" />
          </div>
        </div>
      </div>
    </div>
  )
}
