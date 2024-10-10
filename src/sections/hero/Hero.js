import React from "react";
import Container from "../../components/container/container";
import { Wrapper, HeroContent, Title, SubTitle, Button } from "./Hero.styled";

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <HeroContent>
          <Title>10% OFF on everything</Title>
          <SubTitle>
            Lorem ipsum dolor sit amet consectetur adipiscing elit
          </SubTitle>
          <Button aria-label="Shop Now">Shop Now</Button>
        </HeroContent>
      </Container>
    </Wrapper>
  );
};

export default Hero;
