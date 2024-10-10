import styled from "styled-components";
import { breakpoints, colors } from "../../theme/theme";

const filterProps = (prop) => prop !== "isOpen" && prop !== "delay";

export const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  background-color: ${colors.white};
  top: 0;
  z-index: 1000;
  box-shadow: 0 10px 15px -5px hsla(0, 0%, 0%, 0.05);
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1380px;
  margin: auto;
  padding: 0.6rem 2rem;

  ${breakpoints.MOBILE} {
    padding: 1.2rem 2rem;
  }
`;

export const Logo = styled.div`
  width: 8rem;
  cursor: pointer;

  ${breakpoints.MOBILE} {
    width: 7rem;
  }

  img {
    display: flex;
    width: 100%;
  }
`;

export const NavLinks = styled.ul.withConfig({
  shouldForwardProp: filterProps,
})`
  padding: 0;
  display: flex;
  gap: 1.6rem;

  li {
    font-weight: 500;
    list-style-type: none;
    font-size: 1.1rem;
    cursor: pointer;

    &:hover {
      color: ${colors.link};
    }

    a {
      color: inherit;
    }
  }

  ${breakpoints.MOBILE} {
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${colors.white};
    width: 100%;
    padding: 10rem 0;
    height: 100vh;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-100%)"};
    transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    box-shadow: ${({ isOpen }) =>
      isOpen ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none"};
    z-index: 999;

    li {
      padding: 0.2rem;
      text-align: center;
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(0)" : "translateX(-20px)"};
      opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
      transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
      transition-delay: ${({ delay }) => delay}s;
    }
  }
`;

export const Hamburger = styled.div.withConfig({
  shouldForwardProp: filterProps,
})`
  display: none;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  z-index: 1001;

  span {
    height: 2px;
    width: 25px;
    background: black;
    transition: transform 0.4s ease;
  }

  span:nth-of-type(1) {
    margin: ${({ isOpen }) => (isOpen ? "-1px" : "3px")};
    transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
  }

  span:nth-of-type(2) {
    margin: ${({ isOpen }) => (isOpen ? "-1px 0" : "3px 0")};
    transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
  }

  ${breakpoints.MOBILE} {
    display: flex;
  }
`;
