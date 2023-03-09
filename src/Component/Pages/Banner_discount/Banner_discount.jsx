import React from "react";
import banner1 from "../../image/banner-1.jpg";
import banner2 from "../../image/banner-2.jpg";
import "./banner_discound.css";

const Banner_discount = () => {
  return (
    <div className="mt-11 md:mt-16">
      <div className="">
        <div className="bannerDiscount container-xl">
          {/* left banner */}
          <div data-aos="fade-up" className="relative animationDiscount">
            {/* image banner */}
            <img className="discount" src={banner1} alt="" />
            {/* content */}
            <div className="absolute top-[20%] md:top-[40%] left-1 bottom-[-50%] p-[1rem]">
              <h1 className="text-[1rem] md:text-[2rem] py-2">
                Let the adventure begin.{" "}
              </h1>
              <p className=" text-[#7f8fa6]">Sed lectus. Aliquam lorem ante,</p>
              <p className="hidden md:block text-[#7f8fa6]">
                dapibus in, viverra quis, feugiat a, tellus
              </p>

              <button className="border-[1px] border-[#273c75] mt-[1rem] md:mt-[2rem] md:text-[1rem] p-2 hover:bg-[#273c75] hover:text-white transition-all">
                SHOP NOW
              </button>
            </div>
          </div>
          {/* right banner */}
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="text-center rightBanner relative"
          >
            <img src={banner2} className="discount2" alt="" />

            <div className="absolute top-[57%] left-4">
              <h1 className="text-[2rem]  text-center">
                UP TO{" "}
                <span className="font-semibold text-[#273c75]">20% OFF</span>
              </h1>
              <p className="text-[#7f8fa6]">
                Don't miss savings on bedroom, living,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner_discount;
