import React, { useState } from "react";
import {
  Wrapper,
  HeaderContent,
  Logo,
  Hamburger,
  NavLinks,
} from "./header.styled";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Category", path: "/category" },
  { name: "About", path: "/about" },
  { name: "Reviews", path: "/reviews" },
  { name: "Contacts", path: "/contacts" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <HeaderContent>
        <Logo>
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
        </Logo>

        <Hamburger isOpen={isOpen} onClick={toggleMenu}>
          <span />
          <span />
        </Hamburger>

        <NavLinks isOpen={isOpen}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </NavLinks>
      </HeaderContent>
    </Wrapper>
  );
};

export default Header;
