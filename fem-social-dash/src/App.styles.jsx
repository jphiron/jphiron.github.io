import styled from "styled-components";

const Main = styled.div`
  color: ${props =>
    props.theme === "dark" ? "hsl(0, 0%, 100%)" : "hsl(230, 17%, 14%)"};
  max-width: 1392px;
  margin: 0 auto;
  padding: 0 1.5rem;
  transition: all 0.2s ease-in;
`;

const Background = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${props =>
    props.theme === "dark" ? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)"};
  position: relative;
  transition: all 0.2s ease-in;
  
  @media screen and (max-width: 1023px) {
    padding-bottom: 2.5rem;
    height: 100%;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    height: 250px;
    width: 100%;
    background: ${props =>
      props.theme === "dark" ? "hsl(232, 19%, 15%)" : "hsl(225, 100%, 98%)"};
    border-radius: 0 0 20px 20px;
    transition: all 0.2s ease-in;

  }
`;

export { Background, Main };
