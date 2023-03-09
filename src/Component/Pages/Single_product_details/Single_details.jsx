import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import logo from "../../image/2.jpg";
import Modal from "../Modal/Modal";
import "./single_product.css";

const Product_details = ({ data }) => {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <div className="details_bg">
        <div className="">
          <div className="container">
            <div>
              <div className="single_product pb-4">
                {/* left sit*/}
                <div className="py-11">
                  <div>
                    <div className="hidden md:block">
                      <ReactImageMagnify
                        {...{
                          smallImage: {
                            alt: "Wristwatch by Ted Baker London",
                            isFluidWidth: true,

                            src: data?.image,
                          },
                          largeImage: {
                            src: data?.image,
                            width: 400,
                            height: 400,
                          },
                        }}
                      />
                    </div>
                    {/* for mobile device */}
                    <div className="md:hidden block">
                      <img src={data?.image} alt="" />
                    </div>
                  </div>
                </div>

                {/* right site */}
                <div className="p-11">
                  <div className="">
                    {/* name & description */}
                    <div>
                      <h1 className="text-[#273c75] font-semibold text-2xl pb-2">
                        {data?.name}
                      </h1>

                      <span className="text-[#22a6b3] font-semibold text-2xl">
                        $ {data?.curr_price}
                      </span>

                      <span className="line-through text-[#aebcca] ml-8 font-semibold">
                        $ {data?.prev_price}
                      </span>

                      <p className="py-4">{data?.message}</p>
                      <br />
                      <p>{data?.desc}</p>
                    </div>
                    {/* ======================================= */}
                    {/* counter & buy button */}
                    <div className="flex items-center mt-4 gap-x-2">
                      <input
                        type="number"
                        placeholder="1"
                        className="pl-3 pr-1 py-2 border-[1px] w-[15%] border-[#c8d6e5] outline-none text-[#95a9be]"
                      />
                      <label
                        onClick={() => setShowModal(true)}
                        htmlFor="my-modal-3"
                        className="py-2 px-8 font-semibold inline-block outline-none uppercase bg-[#00d2d3] text-white"
                      >
                        Buy now
                      </label>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-11 h-11 bg-white rounded-full p-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </span>
                    </div>
                    {/* ======================================= */}
                    {/* product info */}
                    <div className="mt-8 space-y-2">
                      <h1 className="font-semibold">
                        Product ID:{" "}
                        <span className="text-[#747d8c]">
                          {data?.product_id}
                        </span>
                      </h1>

                      <h1 className="font-semibold">
                        Category:{" "}
                        <span className="text-[#747d8c]">{data?.category}</span>
                      </h1>

                      <h1 className="font-semibold">
                        Tags:{" "}
                        <span className="text-[#747d8c]">
                          Bathroom, Dishwashing
                        </span>
                      </h1>

                      <h1 className="font-semibold">
                        Location :{" "}
                        <span className="text-[#747d8c]">{data?.location}</span>
                      </h1>
                      <h1 className="font-semibold">
                        Uses :{" "}
                        <span className="text-[#747d8c]">
                          {data?.uses_year}
                        </span>
                      </h1>
                      <h1 className="font-semibold">
                        Shiping :{" "}
                        <span className="text-[#747d8c]">{data?.shiping}</span>
                      </h1>
                      <h1 className="font-semibold">
                        Posted :{" "}
                        <span className="text-[#747d8c]">{data?.date}</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Modal
              data={data}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product_details;
