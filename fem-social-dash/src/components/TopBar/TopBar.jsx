import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/ThemeContext";
import { Toggle } from "../Toggle";
import { Header, TextContainer, Title, FollowerCount } from "./TopBar.styles";

const TopBar = props => {
  const { theme } = useContext(ThemeContext);
  return (
    <Header>
      <TextContainer theme={theme}>
        <Title>Social Media Dashboard</Title>
        <FollowerCount theme={theme}>Total followers: 23,004</FollowerCount>
      </TextContainer>
      <Toggle />
    </Header>
  );
};

export { TopBar };
