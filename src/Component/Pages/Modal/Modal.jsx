import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useProvider } from "../../context/Context_provider";
import storePurchesProduct from "./set_purches_product";

const Modal = ({ data, showModal, setShowModal }) => {
  const { currentUser } = useProvider();
  const { image } = data;

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  // get user product info
  //
  const onSubmit = (data) => {
    // set purches product from modal
    storePurchesProduct(data, image);

    toast.success("Purches successfull");
    setShowModal(false);
  };

  // ====================================================
  return (
    <div className={`${showModal ? "" : "hidden"}`}>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {/* product info */}
          {/* ================================ */}

          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              {/* product name */}
              <div>
                <label htmlFor="" className="block text-xl pb-1 text-[#273c75]">
                  Product name
                </label>
                <input
                  defaultValue={data?.name}
                  {...register("productName")}
                  className="w-full p-1 bg-[#e9eaee6f] outline-none border-none px-3"
                  readOnly
                />
              </div>

              {/* product price */}
              <div>
                <label htmlFor="" className="block text-xl pb-1 text-[#273c75]">
                  Price
                </label>
                <input
                  className="w-full p-1 bg-[#e9eaee6f] outline-none border-none px-3"
                  readOnly
                  defaultValue={data?.curr_price}
                  {...register("price")}
                />
              </div>

              {/* user email */}
              <div>
                <label htmlFor="" className="block text-xl pb-1 text-[#273c75]">
                  Email
                </label>
                <input
                  className="w-full p-1 bg-[#e9eaee6f] outline-none border-none px-3"
                  readOnly
                  defaultValue={currentUser?.email}
                  {...register("email")}
                />
              </div>

              {/* user Location */}
              <div>
                <label htmlFor="" className="block text-xl pb-1 text-[#273c75]">
                  Location
                </label>
                <select
                  className="w-full p-1 bg-[#e9eaee6f] outline-none border-none px-3"
                  readOnly
                  {...register("location")}
                >
                  <option value="dhaka">Dhaka</option>
                  <option value="sylhet">Sylhet</option>
                  <option value="boirshal">Borishal</option>
                  <option value="chattogram">Chattogram</option>
                  <option value="comilla">Comilla</option>
                </select>
              </div>

              {/* user phone number */}
              <div>
                <label htmlFor="" className="block text-xl pb-1 text-[#273c75]">
                  Phone number
                </label>
                <input
                  className="w-full p-1 bg-[#e9eaee6f] outline-none border-none px-3"
                  type="number"
                  {...register("number", {
                    required: "Number is required",
                    minLength: {
                      value: 11,
                      message: "minmun length is 11 character",
                    },
                    maxLength: {
                      value: 11,
                      message: "maximum length is 11 character",
                    },
                  })}
                />
                {/* errors will return when field validation fails  */}
                {errors.number && (
                  <small className="text-red-400" role="alert">
                    {errors.number.message}
                  </small>
                )}
              </div>

              <input
                className="block bg-teal-400 p-2 w-full text-white hover:bg-[#273c75] my-3 hover:text-white transition"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
