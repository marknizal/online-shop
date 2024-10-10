import React from "react";
import Container from "../../components/container/container";
import { Button } from "../category/Category.styled";
import styled from "styled-components";
import { breakpoints } from "../../theme/theme";

const Wrapper = styled.section`
  padding: 4rem 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid navy;
  border-radius: 1.2rem;
  padding: 4rem 2rem;

  ${breakpoints.MOBILE} {
    text-align: center;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem 2rem;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.4rem;
  text-transform: uppercase;

  ${breakpoints.MOBILE} {
    font-size: 2rem;
  }
`;

const VoucherCode = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    margin: 0;
    text-transform: uppercase;
  }
`;

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
