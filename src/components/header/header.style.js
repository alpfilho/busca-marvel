import styled from "styled-components";

import { Container, Content } from "components/contentContainer";

export const HeaderContainer = styled("header")`
  ${Container} {
    ${Content} {
      padding-top: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      color: #d42026;
    }
  }
`;

export const Title = styled("h1")`
  margin: 0px;
  font-size: 27px;
  line-height: 120%;
  font-weight: 900;
`;

export const SubTitle = styled("h2")`
  margin: 0px;
  font-size: 27px;
  line-height: 120%;
  font-weight: 300;
`;

export const TitleContainer = styled("div")`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const ApplicantNameContainer = styled("div")``;

export const Line = styled("div")`
  height: 4px;
  width: 54px;
  background-color: #d42026;
  position: absolute;
  bottom: -4px;
  left: 0px;
`;
