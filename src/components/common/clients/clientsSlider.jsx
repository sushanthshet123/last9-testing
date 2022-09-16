import React, { Component } from "react";
import Slider from "react-slick";
import { clients } from ".";

export default class ClientSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 6000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      arrows: false
    };
    return (
      <div className="grid grid-cols-1 py-5">
        <Slider {...settings}>
          {clients.map((data) => (
            <div
              key={data.alt}
              className=" col-span-2 px-3"
            >
              <img className=" h-16" src={data.img} alt={data.alt} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}