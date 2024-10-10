import styled from "styled-components";
import { breakpoints } from "../../theme/theme";

export const Wrapper = styled.section`
  padding: 4rem 0;
  background-color: #f6f6f6;
`;

export const CategoryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0;
  gap: 1.4rem;

  ${breakpoints.TABLET} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${breakpoints.MOBILE} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ImageContainer = styled.div`
  height: 24rem;
  border-radius: 0.3rem;
  overflow: hidden;
`;

export const StyledImage = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Button = styled.button`
  border: none;
  text-transform: uppercase;
  background-color: #212121;
  color: white;
  padding: 1rem;
  border-radius: 0.3rem;
  cursor: pointer;
`;
