import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Product_details from "./Single_details";
import axios from "axios";
import Screen_loader from "../ScreenLoader/ScreenLoader";

const Single_product_details = () => {
  const { id } = useParams();

  const {
    data: singleData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [""],
    queryFn: async () => {
      const res = await axios.get(`single_product/${id}`);

      return res.data.data;
    },
  });

  return (
    <>
      {isLoading ? (
        <Screen_loader />
      ) : (
        <div className="py-16 ">
          <div>
            {singleData?.map((data) => (
              <Product_details data={data} key={data._id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Single_product_details;
