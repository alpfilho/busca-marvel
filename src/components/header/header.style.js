import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Container, Content } from "components/contentContainer";
import { colors } from "config";

export const HeaderContainer = styled("header")`
  ${Container} {
    ${Content} {
      padding-top: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      color: ${colors.primary};
    }
  }
`;

export const Title = styled("h1")`
  margin: 0px;
  font-size: 27px;
  font-weight: 900;
  vertical-align: middle;
`;

export const LogoMarvel = styled("img")`
  margin: 0px 8px;
  display: inline-block;
  height: 52px;
`;

export const SubTitle = styled("h2")`
  margin: 0px;
  font-size: 16px;
  color: ${colors.primaryLight};
  font-weight: 400;
`;

export const TitleContainer = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ApplicantNameContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Line = styled(motion.div)`
  height: 4px;
  border-radius: 2px;
  width: 54px;
  background-color: ${colors.primaryLight};
  position: absolute;
  bottom: -4px;
  left: 0px;
`;
