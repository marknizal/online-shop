import React, { useState } from "react";
import { Nav, Logo, Hamburger, Menu, MenuLink } from "./header.styled";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Category", path: "/category" },
    { name: "About", path: "/about" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contacts", path: "/contacts" },
  ];

  return (
    <Nav>
      <Logo href="/">MyLogo</Logo>

      <Hamburger aria-label="Toggle menu" onClick={toggleMenu} $isOpen={isOpen}>
        <span />
        <span />
      </Hamburger>

      <Menu $isOpen={isOpen}>
        {menuItems.map((item, index) => (
          <MenuLink key={index} href={item.path} onClick={toggleMenu}>
            {item.name}
          </MenuLink>
        ))}
      </Menu>
    </Nav>
  );
};

export default Header;
