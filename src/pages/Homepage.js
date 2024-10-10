import React from "react";
import Hero from "../sections/hero/Hero";
import Category from "../sections/category/Category";
import Voucher from "../sections/voucher/Voucher";
import Banner from "../sections/banner/Banner";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Category />
      <Voucher />
      <Banner />
    </>
  );
};

export default Homepage;
