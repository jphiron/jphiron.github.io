import styled from "styled-components";

const Switch = styled.label`
  position: relative;
  display: inline-block;
  min-width: 50px;
  height: 25px;
  display: flex;
  margin-right: 1.5rem;

  @media screen and (max-width: 538px) {
    align-self: flex-end;
  }

  &:before,
  &:after {
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    position: absolute;
    display: flex;
    align-items: center;
    height: 100%;
  }

  &:before {
    content: "\f186";
    left: -1.5rem;
  }

  &:after {
    content: "\f185";
    right: -1.5rem;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 34px;
  background: linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%));
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: "";
    height: 21px;
    width: 21px;
    left: 2px;
    bottom: 2px;
    background-color: hsl(232, 19%, 15%);
    border-radius: 50%;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background: hsl(230, 22%, 74%);

    &:before {
      background-color: hsl(225, 100%, 98%);
      transform: translateX(24px);
    }
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196f3;
  }
`;

export { Switch, Checkbox, Slider };
