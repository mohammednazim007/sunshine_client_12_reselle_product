import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./add_product.css";
import { format } from "date-fns";
import { useQuery } from "react-query";
import { toast } from "react-hot-toast";
import { useProvider } from "../../context/Context_provider";

const Add_product = () => {
  const { currentUser } = useProvider();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // addProducthandlear
  //
  const addProducthandlear = (data) => {
    //store image
    uploadImg(data);
    reset();
  };

  //upload image
  //store image in imgBB server
  const uploadImg = async (data) => {
    const files = data.image[0];
    const filetFormate = new FormData();
    filetFormate.append("image", files);

    const img_url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_image_key}`;

    await axios
      .post(img_url, filetFormate)
      .then((url) => {
        const image_uri = url.data.data.url;

        addProductInDB(data, image_uri);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  //add product in mongoDB
  //selar can store product in database
  //
  const addProductInDB = (data, imgUrl) => {
    const times = new Date();
    const newProduct = {
      ...data,
      image: imgUrl,
      date: format(times, "PP"),
    };

    console.log(newProduct);
    //send product in database
    //
    axios
      .post("add_product", newProduct)
      .then((pro) => {
        toast.success("Product add successfull");
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="2000"
      className="add_product_img"
    >
      <h1 className="text-[#273c75] text-2xl md:text-4xl font-semibold py-8">
        Add product
      </h1>

      {/* ================================ */}
      {/* add product form */}
      <form className="space-y-3" onSubmit={handleSubmit(addProducthandlear)}>
        {/* product name */}
        <div className="relative ">
          <span className="absolute top-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </span>

          <input
            type="text"
            {...register("name", {
              required: "Name is required",
              maxLength: 20,
            })}
            aria-invalid={errors.name ? "true" : "false"}
            className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
            placeholder="Product name"
          />
          {errors.name?.type === "required" && (
            <small className="block text-red-400" role="alert">
              First name is required
            </small>
          )}
        </div>

        {/* product category */}
        {/* drop down list for user add & selar */}
        <div className="relative ">
          <span className="absolute top-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
          </span>

          <select
            {...register("category")}
            className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
          >
            <option value="furniture">Furniture</option>
            <option value="home_décor">Fome décor</option>
            <option value="lighting">Lighting</option>
          </select>
        </div>

        {/* privious price */}
        <div className="relative ">
          <span className="absolute top-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>

          <input
            type="number"
            {...register("prev_price", {
              required: "Previous price is required",
              maxLength: 20,
            })}
            aria-invalid={errors.prev_price ? "true" : "false"}
            className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
            placeholder="previous price"
          />
          {errors.prev_price?.type === "required" && (
            <small className="block text-red-400" role="alert">
              Privious price is required
            </small>
          )}
        </div>

        {/* curr_price */}
        <div className="relative ">
          <span className="absolute top-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>

          <input
            type="number"
            {...register("curr_price", {
              required: "Current price price is required",
              maxLength: 20,
            })}
            aria-invalid={errors.curr_price ? "true" : "false"}
            className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
            placeholder="previous price"
          />
          {errors.curr_price?.type === "required" && (
            <small className="block text-red-400" role="alert">
              Current price price is required
            </small>
          )}
        </div>

        {/* uses_year */}
        <div className="relative ">
          <span className="absolute top-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
          </span>

          <select
            {...register("uses_year")}
            className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
          >
            <option defaultValue="1_year">1 Year</option>
            <option value="2_year">2 Year</option>
            <option value="3_year">3 Year</option>
          </select>
        </div>

        {/* location */}
        <div className="relative ">
          <span className="absolute top-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
          </span>

          <select
            {...register("location", {
              required: "Location is required",
            })}
            placeholder="previous price"
            className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
          >
            <option value="sylhet">Sylhet</option>
            <option value="comilla">Comilla</option>
            <option value="mowlobi_bazar">Mowlobi bazar</option>
            <option value="srimongol">Srimongol</option>
          </select>
          {errors.location && (
            <small className="text-red-400" role="alert">
              {errors.location.message}
            </small>
          )}
        </div>

        {/* email */}
        <div className="relative ">
          <span className="absolute top-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>

          <input
            type="email"
            defaultValue={currentUser?.email}
            readOnly
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
            className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
            placeholder="email"
          />
          {errors.email && (
            <small className="text-red-400" role="alert">
              {errors.email.message}
            </small>
          )}
        </div>

        {/* product image */}
        <div className="relative ">
          <span className="absolute top-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </span>

          <input
            type="file"
            {...register("image", {
              required: "image is required",
              maxLength: 20,
            })}
            aria-invalid={errors.image ? "true" : "false"}
            className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
            placeholder="Username"
          />
          {errors.image?.type === "required" && (
            <small className="block text-red-400" role="alert">
              Product image is required
            </small>
          )}
        </div>

        {/* product_id */}
        <div className="relative ">
          <span className="absolute top-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
              />
            </svg>
          </span>

          <input
            type="text"
            {...register("product_id", {
              required: "Name is required",
              maxLength: 20,
            })}
            aria-invalid={errors.product_id ? "true" : "false"}
            className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
            placeholder="Product id"
          />
          {errors.product_id?.type === "required" && (
            <small className="block text-red-400" role="alert">
              Product id is required
            </small>
          )}
        </div>

        {/* description */}
        <div className="relative ">
          <textarea
            name=""
            className="block w-full py-2  border rounded-md px-11 bg-gray-100 outline-none pl-10"
            {...register("desc", {
              required: "Description is required",
            })}
            id=""
            cols="5"
            rows="5"
            placeholder="description"
          ></textarea>

          {errors.desc?.type === "required" && (
            <small className="block text-red-400" role="alert">
              Product description is required
            </small>
          )}
        </div>

        {/* button submit */}
        <div className="btn_color w-[100%] md:w-[16%] text-center py-2">
          <button type="submit" className="butmitBtn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add_product;
