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
      imgSrc:
        "https://img.freepik.com/free-photo/model-wearing-beautiful-shade-clothing_23-2151428029.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1728432000&semt=ais_hybrid",
      alt: "Clothing model",
    },
    {
      imgSrc:
        "https://www.charleskeith.com/on/demandware.static/-/Library-Sites-CharlesKeith/default/dweb74797f/images/PeopleAlsoAsked/crossbody-bags/definition-of-a-crossbody-bag.jpeg",
      alt: "Sporty woman",
    },
    {
      imgSrc:
        "https://assets.vogue.com/photos/58911e41b482c0ea0e4d613e/4:3/w_2560%2Cc_limit/00-holding-inspired-by-the-boys-milan.jpg",
      alt: "Fashion model",
    },
    {
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0162/2116/files/5_COOL_WINTER_OUTFITS_FOR_MEN_6.jpg?v=1540728981",
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
