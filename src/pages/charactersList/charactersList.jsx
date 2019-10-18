import React, { useEffect, useState } from 'react';
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';

import { fetchChars as apiFetchChars } from 'services/charactersService';
import {
	Body,
	CharactersListContainer,
	Header,
	HeaderTitle,
	List,
	Title,
	SubTitle,
	TitleContainer
} from './charactersList.style';

import { ContentContainer } from 'components/contentContainer';
import { CharRow } from './components/charRow';
import { Loading } from './components/loading';

export const CharactersList = () => {
	const location = useLocation();
	const [charactersArray, setCharArray] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	/* Parametros da Url */
	const { name: searchName, page } = queryString.parse(location.search);

	/* Determina se a rota atual é de busca */
	const isSearch = searchName ? true : false;

	/*  */
	const fetchChars = async (name, page) => {
		setIsLoading(true);
		try {
			const response = await apiFetchChars(name, page);

			console.log(response);

			if (response.data && response.data.code === 200) {
				const characters = response.data.data.results;
				setCharArray(characters);
			} else {
				setError('request');
			}
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
	};

	/**
	 * Toda vez que o endereço muda, faz uma nova consulta
	 */
	useEffect(() => {
		fetchChars(searchName, page);
	}, [location.pathname, page, searchName]);

	return (
		<CharactersListContainer>
			<List>
				<ContentContainer>
					<TitleContainer>
						{isSearch ? (
							<SubTitle>
								Resultados para busca pelo nome "<strong>{searchName}</strong>"
							</SubTitle>
						) : null}

						<Title>Personagens Marvel: </Title>
					</TitleContainer>
					<Header>
						<HeaderTitle>Personagem</HeaderTitle>
						<HeaderTitle>Descrição</HeaderTitle>
					</Header>
				</ContentContainer>
				<Body>
					{error ? (
						error === 'request' ? (
							<>
								Erro ao comunicar com a Marvel <span aria-hidden>😩</span>
							</>
						) : error === 'search' ? (
							<>
								Nenhum personagem com este nome <span aria-hidden>😩</span>
							</>
						) : null
					) : (
						charactersArray.map((char) => {
							return (
								<CharRow
									key={char.id}
									id={char.id}
									name={char.name}
									description={char.description}
									thumbnail={char.thumbnail}
								/>
							);
						})
					)}
				</Body>
			</List>
		</CharactersListContainer>
	);
};
