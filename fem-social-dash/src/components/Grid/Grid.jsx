import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-gap: 1.5rem 2rem;
  grid-template-columns: ${({numCols}) => `repeat(${numCols}, 1fr)`};
  grid-template-rows: ${({numRows}) => `repeat(${numRows}, 1fr)`};
  position: relative;
  z-index: 3;

  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }

  @media screen and (max-width: 1023px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 609px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }
`

export { Grid };