import styled from "styled-components";

const Header = styled.header`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  @media screen and (max-width: 538px) {
    flex-flow: column nowrap;
    align-items: flex-start;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;

  @media screen and (max-width: 538px) {
    border-bottom: 1px solid
      ${({ theme }) =>
        theme === "dark" ? "hsl(228, 28%, 25%)" : "hsl(228, 12%, 44%)"};
    width: 100%;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }
`;

const Title = styled.h1`
  margin-bottom: 0.5rem;
  transition: color 0.2s ease-in;
`;

const FollowerCount = styled.span`
  /* color: hsl(228, 34%, 66%); */
  color: ${props =>
    props.theme === "dark" ? "hsl(228, 34%, 66%)" : "hsl(228, 12%, 44%)"};
  font-weight: 700;
  transition: color 0.2s ease-in;
`;

export { Header, TextContainer, Title, FollowerCount };
