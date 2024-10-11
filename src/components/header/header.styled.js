import styled from "styled-components";
import { breakpoints, colors } from "../../theme/theme";

export const Nav = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.white};
  padding: 2.2rem 6rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  box-shadow: 0 10px 15px -5px hsla(0, 0%, 0%, 0.06);

  ${breakpoints.TABLET} {
    padding: 2.4rem 4rem;
  }

  ${breakpoints.MOBILE} {
    padding: 2.4rem 1.8rem;
  }
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
  z-index: 1001;

  &:hover {
    color: ${colors.blue};
  }
`;

export const Hamburger = styled.button.attrs(() => ({ type: "button" }))`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 36px;
  height: 15px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;

  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${colors.black};
    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
      transform: ${({ $isOpen }) =>
        $isOpen ? "rotate(45deg) translate(4px, 4px)" : "rotate(0)"};
    }
    &:nth-child(2) {
      transform: ${({ $isOpen }) =>
        $isOpen ? "rotate(-45deg) translate(4px, -4px)" : "rotate(0)"};
    }
  }

  ${breakpoints.MOBILE} {
    display: flex;
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 1.6rem;

  ${breakpoints.MOBILE} {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${colors.white};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateY(0)" : "translateY(-100%)"};
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
  }
`;

export const MenuLink = styled.a`
  font-weight: 500;
  font-size: 1.1rem;
  cursor: pointer;
  color: ${colors.black};
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${colors.blue};
  }

  ${breakpoints.MOBILE} {
    font-size: 1.3rem;
  }
`;
