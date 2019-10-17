import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container, Content } from "components/contentContainer";

export const CharacterRow = styled(Link)`
  border-bottom: 3px solid rgba(212, 32, 38, 0.1);
  will-change: background-color;
  text-decoration: none;
  transition: background-color 250ms ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(212, 32, 38, 0.1);
  }

  ${Container} {
    ${Content} {
      display: flex;
    }
  }
`;

export const CharInfo = styled("div")`
  width: 75%;
  padding: 20px;
  color: #4e4e4e;
  font-size: 21px;
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-right: 5px;
  margin-left: 5px;

  &:first-child {
    margin-left: 0px;
    width: 25%;
  }

  &:last-child {
    margin-right: 0px;
  }
`;

export const Thumbnail = styled("div")`
  height: 92px;
  width: 92px;
  border-radius: 50%;
  margin-right: 25px;
  background-color: #ccc;
  background-image: url("${props => props.backgroundImage}");
  box-shadow: 0px 2px 15px rgba(0,0,0,0.2);
  background-size: cover;
  background-position: center center;
`;
