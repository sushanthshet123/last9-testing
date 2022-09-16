import React from "react"

const Banner = () => {
  return (
    <div className="bg-white">
      <>
        {/* Hero section */}
        <div className="relative bg-cover">
          <div className="absolute bottom-0 h-1/2" />
          <div className="max-w-7xl mx-auto">
            <h1 className="lg:w-3/4 mx-auto text-center manrope-extrabold md:px-4 heading tracking-tight pt-12">
              Providing visibility
              <br /> into the Rube Goldberg of microservices.
            </h1>

            <div className="md:mt-10 mt-5 md:max-w-sm md:mx-auto md:flex md:justify-center sm:w-full px-4 mb-16 md:mb-0">
              <a href="/schedule-demo" className="flex justify-center cursor-pointer items-center px-8 md:py-4 py-3
                     text-base manrope-semibold rounded-md text-white hover:bg-black primary-btn">
                {/* <MailIcon
                  className="-ml-0.5 mr-2 h-4 w-4"
                /> */}
                Request a demo
              </a>
            </div>
          </div>
        </div>
        <div className={`bg-cover -mt-3`}>
          <video loop autoPlay muted>
            <source
              src="/video/home-banner.mp4"
              className="z-50"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </>
    </div>
  )
}

export default Banner
