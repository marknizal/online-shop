import styled from "styled-components";
import { breakpoints, colors, padding } from "../../theme/theme";

export const Wrapper = styled.section`
  padding: ${padding.bottom};
`;

export const BannerContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 4rem;
  background: url("../../assets/banner.png") no-repeat center center / cover;
  border-radius: 1.2rem;
  height: 70vh;

  h3 {
    text-transform: inherit;
    font-size: 2.4rem;
  }

  .buttonBanner {
    background-color: ${colors.navy};
    align-self: flex-start;
  }

  ${breakpoints.TABLET} {
    padding: 4rem 2rem;
    height: 60vh;
    align-items: end;
    position: relative;

    h3 {
      font-size: 2.6rem;
      color: white;
    }

    .buttonBanner {
      font-size: 1rem;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 50%;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
      border-radius: 1.2rem;
    }

    > * {
      position: relative;
      z-index: 2;
    }
  }

  ${breakpoints.MOBILE} {
    padding: 3rem 2rem;
    height: 60vh;
    align-items: end;
    position: relative;

    h3 {
      font-size: 2rem;
      color: white;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 50%;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
      border-radius: 1.2rem;
    }

    > * {
      position: relative;
      z-index: 2;
    }
  }
`;
