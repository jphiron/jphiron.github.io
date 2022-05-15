import styled from "styled-components";

const Card = styled.div`
  /* display: flex; */
  /* flex-flow: column; */
  /* justify-content: space-evenly; */
  /* align-items: center; */
  background: ${({ theme }) =>
    theme === "dark" ? "hsl(228, 28%, 20%)" : "hsl(227, 47%, 96%)"};
  transition: all 0.2s ease-in;
  min-height: 125px;
  border-radius: 5px;
  cursor: pointer;
  /* overflow: hidden; */
  /* position: relative; */

  @media screen and (min-width: 1441px) {
    min-height: 150px;
  }

  &:hover {
    background: ${({ theme }) =>
    theme === "dark" ? "hsl(228, 28%, 25%)" : "hsl(227, 47%, 91%)"};
    transition: background .1s;
  }
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 1rem;
  color: ${({ theme }) =>
    theme === "dark" ? "hsl(228, 34%, 66%)" : "hsl(228, 12%, 44%)"};
  align-self: start;
`;

const SocialIcon = styled.img`
  justify-self: end;
  align-self: start;
`;

const Count = styled.span`
  font-size: 2rem;
  font-weight: 700;
  align-self: end;
`;

const Change = styled.span`
  justify-self: end;
  align-self: end;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${({ change, theme }) => {
    if (change < 0) {
      return "hsl(356, 69%, 56%)";
    } else if (change > 0) {
      return "hsl(163, 72%, 41%)";
    } else {
      if (theme === "dark") {
        return "hsl(228, 34%, 66%)";
      } else {
        return "hsl(228, 12%, 44%)";
      }
    }
  }};
`;

const ChangeIcon = styled.img`
  display: flex;
  align-items: center;
  margin-right: 0.25rem;
`;

const ChangeValue = styled.span``;

export { Card, Title, SocialIcon, Count, Change, ChangeIcon, ChangeValue };
