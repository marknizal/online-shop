import React from "react";
import Container from "../container/container";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Wrapper,
  FooterContent,
  FooterSection,
  Socials,
} from "./footer.styled";

const footerSections = [
  {
    title: "Company",
    items: [
      { name: "About Us", path: "/about" },
      { name: "Our Services", path: "/services" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Affiliate Program", path: "/affiliate" },
    ],
  },
  {
    title: "Get Help",
    items: [
      { name: "FAQ", path: "/faq" },
      { name: "Shipping", path: "/shipping" },
      { name: "Returns", path: "/returns" },
      { name: "Payment Options", path: "/payment-options" },
      { name: "Order Status", path: "/order-status" },
    ],
  },
  {
    title: "Online Shop",
    items: [
      { name: "Watch", path: "/shop/watch" },
      { name: "Blog", path: "/blog" },
      { name: "Shoes", path: "/shop/shoes" },
      { name: "Dress", path: "/shop/dress" },
    ],
  },
];

const socialLinks = [
  { icon: <FaFacebook />, path: "https://facebook.com", name: "Facebook" },
  { icon: <FaXTwitter />, path: "https://twitter.com", name: "Twitter" },
  { icon: <FaInstagram />, path: "https://instagram.com", name: "Instagram" },
  { icon: <FaLinkedin />, path: "https://linkedin.com", name: "LinkedIn" },
];

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <FooterContent>
          {footerSections.map((section, index) => (
            <FooterSection key={index}>
              <h3>{section.title}</h3>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a href={item.path}>{item.name}</a>
                </li>
              ))}
            </FooterSection>
          ))}

          <FooterSection>
            <h3>Follow us</h3>
            <Socials>
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.path}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </Socials>
          </FooterSection>
        </FooterContent>
      </Container>
    </Wrapper>
  );
};

export default Footer;
