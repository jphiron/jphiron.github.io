import styled from "styled-components";

const handleColor = site => {
  switch (site) {
    case "facebook":
      return "hsl(208, 92%, 53%)";
    case "twitter":
      return "hsl(203, 89%, 53%)";
    case "instagram":
      return "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))";
    case "youtube":
      return "hsl(348, 97%, 39%)";
    default:
      return "none";
  }
};

const Card = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  background: ${({ theme }) =>
    theme === "dark" ? "hsl(228, 28%, 20%)" : "hsl(227, 47%, 96%)"};
  transition: all 0.2s ease-in;
  min-height: 225px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  @media screen and (min-width: 1441px) {
    min-height: 250px;
  }

  &:hover {
    background: ${({ theme }) =>
    theme === "dark" ? "hsl(228, 28%, 25%)" : "hsl(227, 47%, 91%)"};
    transition: background .1s;
  }

  &:before {
    content: "";
    width: 100%;
    height: 5px;
    background: ${({ social }) => handleColor(social)};
    position: absolute;
    top: 0;
  }
`;

const Handle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-weight: 700;
  color: ${({ theme }) =>
    theme === "dark" ? "hsl(228, 34%, 66%)" : "hsl(228, 12%, 44%)"};
  transition: all 0.2s ease-in;
  font-size: 0.8rem;

  img {
    margin-right: 0.5rem;
  }
`;

const Followers = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  transition: none;
`;

const FollowersCount = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
`;

const FollowersLabel = styled.div`
  letter-spacing: 3px;
  font-size: 0.9rem;
  color: ${({ theme }) =>
    theme === "dark" ? "hsl(228, 34%, 66%)" : "hsl(228, 12%, 44%)"};
  transition: all 0.2s ease-in;
`;

const FollowersChange = styled.div`
  display: flex;
  align-items: center;
  color: ${({ followerChange }) => {
    if (followerChange < 0) {
      return "hsl(356, 69%, 56%)";
    } else if (followerChange > 0) {
      return "hsl(163, 72%, 41%)";
    }
  }};
  font-weight: 700;
  font-size: .8rem;
`;

const FollowersChangeIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.25rem;
`;

const FollowersChangeCount = styled.div``;

export {
  Card,
  Handle,
  Followers,
  FollowersCount,
  FollowersLabel,
  FollowersChange,
  FollowersChangeIcon,
  FollowersChangeCount,
};
