import React from "react";
import Container from "../../components/container/container";
import useWebsiteSettings from "../../utils/hooks/useWebsiteSettings";
import { Button } from "../category/Category.styled";
import { Wrapper, Content, Title, VoucherCode } from "./Voucher.styled";

const Voucher = () => {
  const { getSettings, loading, error } = useWebsiteSettings();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <Wrapper>
      <Container>
        <Content>
          <Title
            dangerouslySetInnerHTML={{
              __html: getSettings("cm34abkcv0jru07l1l3d4z5kr"),
            }}
          />
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
