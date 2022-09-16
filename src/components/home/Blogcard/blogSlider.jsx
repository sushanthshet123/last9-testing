import React, { Component } from "react"
import Slider from "react-slick"
import { Link } from "gatsby"
import { cardDataBlog } from "../data"

export default class BlogSlider extends Component {
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
          {cardDataBlog.map((data) => (
            <div key={data.name} className={`p-3 ml-11`}>
              <Link to={data.href}>
                <div
                  key={data.name}
                  className={`dark-blue-background p-7 sm:px-6 rounded-xl min-h-[500px]`}
                >
                  <div>
                    <div
                      className={`flex space-x-3 pt-2 h-60 bg-cover bg-center`}
                      style={{ backgroundImage: `url(${data.image})` }}
                    >
                      <div className="flex -space-x-2">
                        {data.profile.map((img) => (
                          <img
                            key={data.name}
                            className="inline-block h-8 rounded-full ring-4 ring-green"
                            src={img.image}
                            alt={img.name}
                          />
                        ))}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-white">
                          {data.profileName.map((img) => (
                            <>
                              <Link
                                key={data.name}
                                to="#"
                                className="hover:underline manrope-semibold"
                              >
                                {img.name}
                              </Link>
                              <br />
                            </>
                          ))}
                        </p>
                        <p className="text-sm mt-1">
                          <Link
                            to="#"
                            className="hover:underline light-green font-mono"
                          >
                            {data.time}
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className={` p-3`}>
                      <h1 className="light-green font-mono">{data.name}</h1>
                      <h1 className="gradient-color text-xl manrope-extrabold">
                        {data.title}
                      </h1>
                      <p className="text-gray-200 text-sm py-5 manrope-regular text-xs">{data.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}
