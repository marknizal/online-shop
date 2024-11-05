import React from "react";
import Container from "../../components/container/container";
import useWebsiteSettings from "../../utils/hooks/useWebsiteSettings";
import { Wrapper, HeroContent, Title, SubTitle, Button } from "./Hero.styled";

const Hero = () => {
  const { getSettings, loading, error } = useWebsiteSettings();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <Wrapper>
      <Container>
        <HeroContent>
          <Title
            dangerouslySetInnerHTML={{
              __html: getSettings("cm2wkcbw76kog07mtybnfh0b7"),
            }}
          />
          <SubTitle
            dangerouslySetInnerHTML={{
              __html: getSettings("cm2wk0b7d6j0307mtw7ld9rvr"),
            }}
          />
          <Button aria-label="Shop Now">Shop Now</Button>
        </HeroContent>
      </Container>
    </Wrapper>
  );
};

export default Hero;
