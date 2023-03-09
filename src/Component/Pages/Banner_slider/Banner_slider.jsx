import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import banner1 from "../../image/16.png";
import banner2 from "../../image/17.png";
import banner3 from "../../image/18.png";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2500,
      pauseOnHover: true,
      autoplay: true,
    };
    return (
      <div className="">
        <Slider {...settings}>
          <div className="relative">
            {/* text content */}
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="container absolute top-[22%] md:top-[45%] bottom-[50%] left-[1rem] md:left-[5rem]"
            >
              <div>
                <span>SELE UP TO 30% OFF</span>
                <h1 className="text-[1rem] md:text-[3rem] font-semibold text-[#273c75]">
                  Outline Studio Sofa
                </h1>

                {/* button */}
                <div className="bg-white px-4 py-1 hover:bg-[#273c75] hover:text-white transition-all max-w-[49%] md:max-w-[15%] md:py-2 text-center rounded mt-2">
                  <button>SHOP NOW</button>
                </div>
              </div>
            </div>
            <img src={banner1} alt="" />
          </div>

          <div className="relative">
            {/* text content */}
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="container absolute top-[22%] md:top-[45%] bottom-[50%] left-[1rem] md:left-[5rem]"
            >
              <div>
                <span>SELE UP TO 30% OFF</span>
                <h1 className="text-[1rem] md:text-[3rem] font-semibold text-[#273c75]">
                  Accessories
                </h1>

                {/* button */}
                <div className="bg-white px-4 py-1 hover:bg-[#273c75] hover:text-white transition-all max-w-[49%] md:max-w-[15%] md:py-2 text-center rounded mt-2">
                  <button>SHOP NOW</button>
                </div>
              </div>
            </div>
            <img src={banner2} alt="" />
          </div>

          <div className="relative">
            {/* text content */}
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="container absolute top-[22%] md:top-[45%] bottom-[50%] left-[1rem] md:left-[5rem]"
            >
              <div>
                <span>SELE UP TO 30% OFF</span>
                <h1 className="text-[1rem] md:text-[3rem] font-semibold text-[#273c75]">
                  Spring Collection
                </h1>

                {/* button */}
                <div className="bg-white px-4 py-1 hover:bg-[#273c75] hover:text-white transition-all max-w-[49%] md:max-w-[15%] md:py-2 text-center rounded mt-2">
                  <button>SHOP NOW</button>
                </div>
              </div>
            </div>
            <img src={banner3} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
