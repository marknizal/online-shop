import React from "react";
import Container from "../../components/container/container";
import {
  Wrapper,
  CategoryList,
  Item,
  ImageContainer,
  StyledImage,
  Button,
} from "./Category.styled";

const Category = () => {
  const items = [
    {
      imgSrc: "../../assets/category1.png",
      alt: "Clothing model",
    },
    {
      imgSrc: "../../assets/category2.png",
      alt: "Sporty woman",
    },
    {
      imgSrc: "../../assets/category3.png",
      alt: "Fashion model",
    },
    {
      imgSrc: "../../assets/category4.png",
      alt: "Casual man",
    },
  ];

  return (
    <Wrapper>
      <Container>
        <CategoryList>
          {items.map((item, index) => (
            <Item key={index}>
              <ImageContainer>
                <StyledImage src={item.imgSrc} alt={item.alt} />
              </ImageContainer>
              <Button>Buy now</Button>
            </Item>
          ))}
        </CategoryList>
      </Container>
    </Wrapper>
  );
};

export default Category;
