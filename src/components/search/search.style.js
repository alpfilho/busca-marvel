import styled from "styled-components";

import { Container, Content } from "components/contentContainer";

export const SearchContainer = styled("div")`
  ${Container} {
    ${Content} {
      padding-top: 32px;
      padding-bottom: 32px;
    }
  }
`;

export const SearchForm = styled("form")`
  display: flex;
  flex-direction: column;
`;

export const Label = styled("label")`
  color: #d42026;
  font-size: 16px;
  font-weight: 400;
`;

export const Input = styled("input")`
  margin-top: 4px;
  border-radius: 5px;
  border: 1px solid #a5a5a5;
  width: 400px;
  height: 31px;
  padding-left: 8px;
  padding-right: 8px;

  &:focus,
  :active {
    outline: none;
  }
`;
