import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import "./product_css.css";
import Product_temp from "./Product_templete";

const Product_categories = () => {
  // const url = `${process.env.REACT_APP_BASE_URL}getAllCategories`;
  //

  const { data: productData = [], isLoading } = useQuery({
    queryKey: ["getAllCategories"],
    queryFn: async () => {
      const res = await axios.get("/getAllCategories");

      return res.data.data;
    },
  });

  return (
    <div>
      <div className="py-11 md:py-16">
        <div className="container">
          <h1 className="text-[1rem] md:text-[2rem] font-semibold text-[#192a56] py-3">
            OUR COLLECTION
          </h1>

          <div className="product_grid">
            {productData?.map((data) => (
              <Product_temp data={data} key={data?._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_categories;
