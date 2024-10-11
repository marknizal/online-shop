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
import category1 from "../../assets/category1.png";
import category2 from "../../assets/category2.png";
import category3 from "../../assets/category3.png";
import category4 from "../../assets/category4.png";

const Category = () => {
  const items = [
    {
      imgSrc: category1,
      alt: "Clothing model",
    },
    {
      imgSrc: category2,
      alt: "Sporty woman",
    },
    {
      imgSrc: category3,
      alt: "Fashion model",
    },
    {
      imgSrc: category4,
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
