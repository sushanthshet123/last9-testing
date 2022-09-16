import React from "react"

export default function HowItsWork() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="max-w-7xl mx-auto mt-5">
        <h1 className="lg:w-3/4 mx-auto pt-7 pb-4 text-center heading tracking-tight manrope-extrabold tracking-tight ">
          The bedrock of <br /> Operational Intelligence
        </h1>
      </div>
      <div className="mt-14">
        <video loop autoPlay muted className="mx-auto">
          <source
            src="/video/operational-intellignce.mp4"
            className="z-50"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
