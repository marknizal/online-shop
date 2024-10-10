import React from "react";
import Container from "../../components/container/container";
import { Button } from "../category/Category.styled";
import { Wrapper, Content, Title, VoucherCode } from "./Voucher.styled";

const Voucher = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Title>10% OFF On Everything</Title>
          <VoucherCode>
            <h3>Use code: 288f5p19</h3>
            <Button>Shop now</Button>
          </VoucherCode>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Voucher;
