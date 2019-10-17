import React, { useEffect, useState } from "react";
import queryString from "query-string";

import { useLocation, useParams } from "react-router-dom";

import { fetchChars as apiFetchChars } from "services/charactersService";
import {
  CharactersListContainer,
  List,
  Header,
  HeaderTitle,
  Body,
  CharacterRow
} from "./charactersList.style";
import { isInt } from "utils";
import { ContentContainer } from "components/contentContainer";
import { CharRow } from "./components/charRow";

export const CharactersList = () => {
  const location = useLocation();
  const [charactersArray, setCharArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /** Parâmetro da URL */
  const { page = 1 } = useParams();

  /** Parametro de Busca da URL */
  const { name: searchName } = queryString.parse(location.search);

  /* Determina se a rota atual é de busca */
  const isSearch = searchName ? true : false;

  /**
   *
   */
  const fetchChars = async (search, offset, limit) => {
    try {
      setIsLoading(true);
      const response = await apiFetchChars(search, offset, limit);

      if (response.data && response.data.code === 200) {
        const characters = response.data.data.results;
        setIsLoading(false);
        setCharArray(characters);
      } else {
        setError("");
      }
    } catch (error) {
      setIsLoading(false);

      console.log(error);
    }
  };

  useEffect(() => {
    if (isInt(page)) {
      /**
       * A contagem de páginas da api começa em 0
       * e eu quero que a contagem no site inicie em 1
       */
      const activeOffset = page - 1;

      if (isSearch) {
        fetchChars(isSearch, activeOffset, 10);
      } else {
        /**
         * Caso não exista nada sendo buscado, retorna a lista inicial ou paginada
         */
        fetchChars(null, activeOffset, 10);
      }
    } else {
      console.log("rota errada");
    }
  }, [location.key, isSearch, searchName, page]);

  return (
    <CharactersListContainer>
      <ContentContainer>
        <List>
          <Header>
            <HeaderTitle>Personagem</HeaderTitle>
            <HeaderTitle>Descrição</HeaderTitle>
          </Header>
          <Body>
            {charactersArray.map(char => {
              // return <CharRow key={char.id} image={}  />;
            })}
          </Body>
        </List>
      </ContentContainer>
    </CharactersListContainer>
  );
};
