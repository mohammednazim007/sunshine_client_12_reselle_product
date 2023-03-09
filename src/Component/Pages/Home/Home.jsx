import React from "react";
import Banner_discount from "../Banner_discount/Banner_discount";
import SimpleSlider from "../Banner_slider/Banner_slider";
import Footer from "../Footer/Footer";
import Product_categories from "../Product_categories/Product_categories";
import CenterMode from "../Testimonial_slider/Testimonial_slider";

const Home = () => {
  return (
    <div className="pt-16">
      <SimpleSlider />

      {/* product categories */}
      <Product_categories />

      {/* banner discount */}
      <Banner_discount />

      {/* testimonial slider */}
      <CenterMode />
      {/* footer page */}
      <Footer />
    </div>
  );
};

export default Home;
