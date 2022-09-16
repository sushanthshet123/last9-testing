import React, { Component } from "react"
import Slider from "react-slick"
import { cardData } from "../data"
import * as style from "../index.module.css"
import { Link } from "gatsby"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1.1,
      slidesToScroll: 1,
    }
    return (
      <div className="overflow-hidden">
        <Slider {...settings}>
          {cardData?.map((data) => (
            <div key={data.name} className="p-3 ml-11">
              <div
                key={data.name}
                className={`${style.testmonial_card} px-4 py-5 sm:px-6 rounded-xl min-h-[430px]`}
              >
                <div className="p-5">
                  <div className="flex justify-center">
                    <img
                      className={`rounded-full ${data.size === "sm" ? "h-16" : ""}`}
                      src={data.image}
                      alt={data.name}
                    />
                  </div>
                  <div className="text-gray-50 py-5 text-center manrope-regular text-sm">
                    <p>{data.description}</p>
                  </div>
                  <div className="pt-2 text-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full mx-auto"
                        src={data.profile}
                        alt={data.name}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm manrope-regular text-white py-1">
                        <Link to="#" className="hover:underline">
                          {data.name}
                        </Link>
                      </p>
                      <p className="text-sm text-gray-500">
                        <Link
                          to="#"
                          className="hover:underline light-green font-mono"
                        >
                          {data.designation}
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}
