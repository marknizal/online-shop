import styled from "styled-components";
import { breakpoints, colors, padding } from "../../theme/theme";

export const Wrapper = styled.footer`
  padding: ${padding.default};
  background-color: ${colors.footer};
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  ${breakpoints.MOBILE} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FooterSection = styled.ul`
  padding: 0;
  margin: 0;
  color: white;
  padding: 2rem;

  h3 {
    margin: 0 0 1.4rem;
  }

  li {
    list-style-type: none;
    margin-bottom: 0.6rem;
    color: #ddd;
    cursor: pointer;

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  ${breakpoints.MOBILE} {
    padding: 1rem 0;
  }
`;

export const Socials = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;

  svg {
    font-size: 1.4rem;
    color: ${colors.white};
  }
`;
