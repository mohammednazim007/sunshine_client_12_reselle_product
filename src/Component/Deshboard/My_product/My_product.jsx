import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useProvider } from "../../context/Context_provider";
import Screen_loader from "../../Pages/ScreenLoader/ScreenLoader";
import Product_templete from "./Product_templete";

const My_product = () => {
  const { currentUser } = useProvider();

  const {
    data: product = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["filter_added_product", currentUser?.email],
    enabled: !!currentUser,
    queryFn: async () => {
      const res = await axios.get(`filter_added_product/${currentUser?.email}`);

      return res.data.data;
    },
  });

  console.log(product);

  return (
    <>
      {isLoading ? (
        <Screen_loader />
      ) : (
        <div className="">
          <div className="py-16 md:py-24 ">
            <div className="container ">
              <div className="h-full">
                {product.length === 0 ? (
                  <h1 className="py-11 text-2xl text-[#273c75] flex items-center justify-center md:text-4xl font-semibold">
                    There is not Product
                  </h1>
                ) : (
                  <h1 className="py-11 text-2xl text-[#273c75] ">
                    Product List
                  </h1>
                )}

                <div className="">
                  {product?.map((data) => (
                    <Product_templete data={data} key={data._id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default My_product;
