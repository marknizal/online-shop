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
          <Title dangerouslySetInnerHTML={{ __html: getSettings("title") }} />
          <SubTitle
            dangerouslySetInnerHTML={{ __html: getSettings("description") }}
          />
          <Button aria-label="Shop Now">Shop Now</Button>
        </HeroContent>
      </Container>
    </Wrapper>
  );
};

export default Hero;
