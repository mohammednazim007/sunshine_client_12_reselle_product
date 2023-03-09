import React, { Component } from "react";
import Slider from "react-slick";

import img1 from "../../image/1.jpg";
import img2 from "../../image/2.jpg";
import img3 from "../../image/3.jpg";
import img4 from "../../image/4.jpg";

export default class CenterMode extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToScroll: 3,
      slidesToShow: 3,
      autoplay: true,
    };
    return (
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="py-11 md:py-16"
      >
        <div className="text-center py-10 md:py-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#273c75]">
            JOURNAL
          </h2>
        </div>
        <Slider {...settings}>
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
