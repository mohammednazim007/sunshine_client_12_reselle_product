import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Product_templetes from "../Products/Product_templetes";
import Screen_loader from "../ScreenLoader/ScreenLoader";
import "./whole_product.css";

const Product_service = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get("products");
      return res.data.data;
    },
  });

  // ===============================
  return (
    <>
      {isLoading ? (
        <Screen_loader />
      ) : (
        <div className="productBg py-24 md:pt-36">
          <div className="container">
            <h1 className="text-2xl md:text-4xl py-5">Best Seller</h1>
            <div className="grid_product ">
              {products?.map((data) => (
                <Product_templetes data={data} key={data._id} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product_service;
