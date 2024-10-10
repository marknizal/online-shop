import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { breakpoints, colors, padding } from "../../theme/theme";

export const Wrapper = styled.section`
  padding: ${padding.bottom};
`;

export const HeadingTitle = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 2rem;
`;

export const ReviewList = styled.ul`
  padding: 0;
  margin: 2rem 0 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;

  ${breakpoints.MOBILE} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 3rem;
  border: 2px solid ${colors.navy};
  border-radius: 1rem;
  gap: 2rem;

  ${breakpoints.MOBILE} {
    padding: 2rem 1.4rem;
    gap: 1.4rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 30%;

  * {
    margin: 0;
  }

  h3 {
    font-size: 1.2rem;
  }

  p {
    font-size: 0.8rem;
  }

  ${breakpoints.MOBILE} {
    width: 40%;
  }
`;

export const ProfilePicture = styled.div`
  width: 6rem;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 50%;
  margin-bottom: 0.6rem;

  img {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${breakpoints.MOBILE} {
    width: 5rem;
  }
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 70%;

  p {
    margin: 0;
  }

  ${breakpoints.MOBILE} {
    gap: 0.6rem;
    width: 60%;

    p {
      font-size: 0.8rem;
    }
  }
`;

export const Rating = styled.div`
  display: flex;
  gap: 0.4rem;
`;

export const StarIcon = styled(FaStar)`
  font-size: 1.2rem;
  color: ${(props) => (props.active ? "orange" : "lightgray")};
`;
