import styled from "styled-components";
import { breakpoints, colors } from "../../theme/theme";
import heroImg from "../../assets/hero.png";

export const Wrapper = styled.section`
  height: 100vh;
  background: url(${heroImg}) no-repeat center center / cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 40, 0.6);
    mix-blend-mode: darken;
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  text-align: center;

  ${breakpoints.MOBILE} {
    gap: 0.8rem;
  }

  * {
    margin: 0;
    color: ${colors.white};
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  text-transform: uppercase;

  ${breakpoints.MOBILE} {
    font-size: 2.6rem;
  }
`;

export const SubTitle = styled.p`
  font-size: 1.4rem;

  ${breakpoints.MOBILE} {
    font-size: 1.2rem;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 1rem;
  width: 12rem;
  background-color: ${colors.blue};
  color: ${colors.white};
  margin-top: 2rem;
  border-radius: 0.4rem;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 1rem;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${colors.navy};
    color: ${colors.white};
  }
`;
