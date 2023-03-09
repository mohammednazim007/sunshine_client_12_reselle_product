import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import Product_templetes from "./Product_templetes";
import "./product.css";
import Screen_loader from "../ScreenLoader/ScreenLoader";

const Products = () => {
  const product_name = useParams();

  const { data: multipleProduct = [], isLoading } = useQuery({
    queryKey: ["filterByName", "product_name"],
    enabled: !!product_name,
    queryFn: async () => {
      const res = await axios.get(`filterByName/${product_name?.product_name}`);

      return res.data.data;
    },
  });

  return (
    <div>
      {isLoading ? (
        <Screen_loader />
      ) : (
        <div className="py-24 bg_color">
          <div className="container">
            <h1 className="text-[2rem] py-4">
              {product_name?.product_name.toUpperCase()}
            </h1>

            <div>
              <div className="product_grid_single">
                {multipleProduct?.map((data) => (
                  <Product_templetes data={data} key={data?._id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
