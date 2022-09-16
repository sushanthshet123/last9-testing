import * as React from "react"


const ProductsCTA = () => {
  return (
    <div className="bg-indigo-500 rounded-xl relative mx-5 md:mx-0">
      <div className="max-w-2xl mx-auto text-center py-12 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl tracking-tight manrope-extrabold text-white sm:text-4xl mb-8">
          <span className="block">Have a question?</span>
        </h2>
        <a href="https://discord.com/invite/Q3p2EEucx9" Using target="_blank" rel="noreferrer"
          className={`rounded-md manrope-semibold px-6 py-3 block md:inline-block mx-4 md:mx-0 text-white bg-black`}>Ask us on Discord</a>
        <img src="/img/products/vector.svg" alt="Vector" className="absolute w-72 bottom-0 right-28 hidden lg:block" />
      </div>
    </div>
  )
}

export default ProductsCTA