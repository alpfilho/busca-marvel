import React, { useEffect, useState } from "react";
import queryString from "query-string";

import { useLocation } from "react-router-dom";

import { fetchChars as apiFetchChars } from "services/charactersService";
import {
  CharactersListContainer,
  List,
  Header,
  HeaderTitle,
  Body
} from "./charactersList.style";

import { ContentContainer } from "components/contentContainer";
import { CharRow } from "./components/charRow";
import { Loading } from "./components/loading";

export const CharactersList = () => {
  const location = useLocation();
  const [charactersArray, setCharArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
    /**
     * Caso seja uma busca
     */
    if (isSearch) {
      fetchChars(isSearch, 0, 10);
    } else {
      /**
       * Caso não exista nada sendo buscado, retorna a lista inicial ou paginada
       */
      fetchChars(null, 0, 10);
    }
  }, [isSearch, searchName]);

  return (
    <CharactersListContainer>
      <List>
        <ContentContainer>
          <Header>
            <HeaderTitle>Personagem</HeaderTitle>
            <HeaderTitle>Descrição</HeaderTitle>
          </Header>
        </ContentContainer>
        <Body>
          {charactersArray.map(char => {
            return (
              <CharRow
                key={char.id}
                id={char.id}
                name={char.name}
                description={char.description}
                thumbnail={char.thumbnail}
              />
            );
          })}
          <Loading isLoading={isLoading} />
        </Body>
      </List>
    </CharactersListContainer>
  );
};
