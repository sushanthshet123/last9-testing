import React from "react"
import ClientSlider from "./clientsSlider"

export const clients = [
  { img: "/clients/disney+hotstar.svg", alt: "hotstar" },
  { img: "/clients/dyte.svg", alt: "dyte", size: "sm" },
  { img: "/clients/yeildstreet.svg", alt: "yeildstreet" },
  { img: "/clients/capital-float.svg", alt: "capital-float", size: "sm" },
  { img: "/clients/dukaan.svg", alt: "dukaan" },
  { img: "/clients/clever-top.svg", alt: "clever-top" },
]

export default function Clients() {
  return (
    <div className="bg-white py-10">
      {/* Logo Cloud */}
      <div className="bg-white py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base manrope-extrabold md:mt-10 md:mb-8 mt-8 mb-3">
            Customers we work with
          </p>
          <div className="max-w-6xl my-8s md:grid grid-cols-2 md:grid-cols-6 gap-6 px-10 lg:mx-auto hidden">
            {clients.map((data) => (
              <div
                key={data.alt}
                className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
              >
                <img src={data.img} alt={data.alt} className={`${data.size === "sm" ? "md:h-24 md:w-24" : ""}`} />
              </div>
            ))}
          </div>
          <div className="md:hidden block">
            <ClientSlider />
          </div>
        </div>
      </div>
    </div>
  )
}
