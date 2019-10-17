import styled from "styled-components";

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
  background-color: #d42026;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  height: 37px;
  line-height: 37px;
  padding-left: 16px;
  width: 75%;

  &:first-child {
    width: 25%;
  }
`;

export const Body = styled("div")``;
