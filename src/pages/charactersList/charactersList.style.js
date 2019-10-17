import styled from "styled-components";

import { colors } from "config";

export const CharactersListContainer = styled("div")`
  /* Tela - Header - Busca - Rodape */
  min-height: calc(100vh - 117px - 52px - 12px);
`;

export const List = styled("div")`
  position: relative;
`;

export const Header = styled("div")`
  display: flex;
`;

export const HeaderTitle = styled("div")`
  /* background-color: #d42026; */
  color: ${colors.primary};
  font-size: 22px;
  font-weight: 900;
  height: 37px;
  line-height: 37px;
  padding-left: 16px;
  width: 75%;

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

export const Body = styled("div")`
  position: relative;
`;
