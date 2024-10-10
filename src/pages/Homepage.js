import React from "react";
import Hero from "../sections/hero/Hero";
import Category from "../sections/category/Category";
import Voucher from "../sections/voucher/Voucher";
import Banner from "../sections/banner/Banner";
import Reviews from "../sections/reviews/Reviews";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Category />
      <Voucher />
      <Banner />
      <Reviews />
    </>
  );
};

export default Homepage;
