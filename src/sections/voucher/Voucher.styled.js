import styled from "styled-components";
import { breakpoints, colors, padding } from "../../theme/theme";

export const Wrapper = styled.section`
  padding: ${padding.default};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid ${colors.navy};
  border-radius: 1.2rem;
  padding: 4rem;
  gap: 1rem;

  ${breakpoints.MOBILE} {
    text-align: center;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem 2rem;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2.4rem;
  text-transform: uppercase;

  ${breakpoints.MOBILE} {
    font-size: 2rem;
  }
`;

export const VoucherCode = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    margin: 0;
    text-transform: uppercase;
  }
`;
