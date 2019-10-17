import React, { useRef } from "react";
import queryString from "query-string";
import { useHistory } from "react-router-dom";

import { SearchContainer, SearchForm, Label, Input } from "./search.style";
import { ContentContainer } from "components/contentContainer";

export const Search = () => {
  const input = useRef();
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    const charname = input.current.value;

    /* Ao enviar o form, altera a url, processando a url de pesquisa */
    history.push({
      pathname: "/",
      search: queryString.stringify({
        name: charname
      })
    });
  };

  return (
    <SearchContainer>
      <ContentContainer>
        <SearchForm onSubmit={handleSubmit}>
          <Label>Nome do Personagem</Label>
          <Input ref={input} name="charname" type="text" />
        </SearchForm>
      </ContentContainer>
    </SearchContainer>
  );
};
