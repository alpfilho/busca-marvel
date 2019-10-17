import React from "react";

import { SearchContainer, SearchForm, Label, Input } from "./search.style";
import { ContentContainer } from "components/contentContainer";

export const Search = () => {
  return (
    <SearchContainer>
      <ContentContainer>
        <SearchForm>
          <Label>Nome do Personagem</Label>
          <Input />
        </SearchForm>
      </ContentContainer>
    </SearchContainer>
  );
};
