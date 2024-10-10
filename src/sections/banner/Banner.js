import React from "react";
import Container from "../../components/container/container";
import { VoucherCode } from "../voucher/Voucher.styled";
import { Button } from "../category/Category.styled";
import { Wrapper, BannerContent } from "./Banner.styled";

const Banner = () => {
  return (
    <Wrapper>
      <Container>
        <BannerContent>
          <VoucherCode>
            <h3>Shop New Arrivals</h3>
            <Button className="buttonBanner">Shop now</Button>
          </VoucherCode>
        </BannerContent>
      </Container>
    </Wrapper>
  );
};

export default Banner;
