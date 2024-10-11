import React from "react";
import Container from "../../components/container/container";
import {
  Wrapper,
  HeadingTitle,
  ReviewList,
  Item,
  Profile,
  ProfilePicture,
  Comment,
  Rating,
  StarIcon,
} from "./Reviews.styled";
import picture from "../../assets/default-profile.png";

const Reviews = () => {
  const reviews = [
    {
      name: "Billy Joe",
      profession: "Photographer",
      picture: picture,
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
    },
    {
      name: "John Mark",
      profession: "Developer",
      picture: picture,
      rating: 4,
      comment:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    },
  ];

  return (
    <Wrapper>
      <Container>
        <HeadingTitle>Client Reviews</HeadingTitle>
        <ReviewList>
          {reviews.map((review) => (
            <Item key={review.name}>
              <Profile>
                <ProfilePicture>
                  <img src={review.picture} alt="profile" />
                </ProfilePicture>
                <h3>{review.name}</h3>
                <p>{review.profession}</p>
              </Profile>
              <Comment>
                <Rating>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} data-active={i < review.rating} />
                  ))}
                </Rating>
                <p>{review.comment}</p>
              </Comment>
            </Item>
          ))}
        </ReviewList>
      </Container>
    </Wrapper>
  );
};

export default Reviews;
