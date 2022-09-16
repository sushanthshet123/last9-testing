import React from "react"

export default function Banner() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-cover">
        <div className="absolute bottom-0 h-1/2" />
        <div className="max-w-7xl mx-auto">
          <h1 className="lg:w-2/4 mx-auto py-16 text-center text-5xl manrope-extrabold px-3 md:px-4 tracking-tight sm:text-5xl lg:text-7xl">
            From our stables
          </h1>
        </div>
      </div>
    </div>
  )
}
