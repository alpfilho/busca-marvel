import React, { useEffect, useRef, useState } from 'react';
import queryString from 'query-string';

import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import { fetchChars as apiFetchChars } from 'services/charactersService';
import {
	CharactersListContainer,
	ErrorContainer,
	List,
	ListContainer,
	Title,
	TitleContainer,
	PaginationContainer
} from './charactersList.style';

import { ContentContainer } from 'components/contentContainer';
import { Pagination } from './components/pagination';
import { CharRow } from './components/charRow';
import { Loading } from './components/loading';

export const animationProps = {
	initial: { y: '33%', opacity: 0 },
	animate: { y: '0%', opacity: 1 },
	exit: { y: '-33%', opacity: 0 },
	transition: {
		type: 'tween',
		duration: 0.75
	}
};

export const CharactersList = () => {
	const location = useLocation();
	const cancelTokenRef = useRef({
		executor: () => {}
	});
	const prevState = useRef({
		name: '',
		page: undefined
	});
	const [charactersArray, setCharArray] = useState([]);

	// const [charCountPage, setCharCountPage] = useState(0);
	const [charCountTotal, setCharCountTotal] = useState(0);

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	/* Manter em sincronia com api */
	const charLimitPerPage = 10;

	/* Caso tenha mais que 10 resultados, tem paginação */
	const hasPagination = charCountTotal > charLimitPerPage;

	/* Parametros da Url */
	const { name: searchName, page: pageParam } = queryString.parse(
		location.search
	);

	/**
	 * Toda vez que o endereço muda, faz uma nova consulta
	 * e limpa os erros
	 */
	useEffect(() => {
		const fetchChars = async () => {
			setError(null);
			setIsLoading(true);
			try {
				const response = await apiFetchChars(
					searchName,
					pageParam,
					cancelTokenRef
				);

				if (response.data && response.data.code === 200) {
					const characters = response.data.data.results;
					// const charPageCount = response.data.data.count;
					const charTotalCount = response.data.data.total;

					if (characters.length > 0) {
						/* Atualiza a array de personagens */
						setCharArray(characters);
						setCharCountTotal(charTotalCount);
					} else {
						setCharArray(characters);
						setCharCountTotal(charTotalCount);
						setError('search');
					}
				} else {
					setCharArray([]);
					setError('request');
				}
			} catch (error) {
				console.log(error);
				setCharArray([]);
				setError('request');
			}

			setIsLoading(false);
		};

		if (
			prevState.current.name !== searchName ||
			prevState.current.page !== pageParam
		) {
			window.scrollTo({ top: 0 });
			fetchChars();
		}
		prevState.current.name = searchName;
		prevState.current.page = pageParam;

		const cancel = cancelTokenRef.current;

		return () => {
			cancel.executor();
		};
	}, [isLoading, pageParam, searchName]);

	const errorMessage = () => {
		const errorAnimation = {
			initial: { y: -10, opacity: 0 },
			animate: { y: 0, opacity: 1 },
			exit: { y: 10, opacity: 0 },
			transition: animationProps.transition
		};

		/* Caso exista algum erro */
		if (error === 'request') {
			return (
				<Title key="request-error" {...errorAnimation}>
					Erro ao comunicar com a Marvel <span aria-hidden>😩</span>
				</Title>
			);
		}
		if (error === 'search') {
			return (
				<Title key="search-error" {...errorAnimation}>
					Nenhum personagem com este nome <span aria-hidden>😩</span>
				</Title>
			);
		}
	};

	return (
		<CharactersListContainer>
			<AnimatePresence>
				{isLoading ? <Loading key="loading" /> : null}
				{error ? (
					<ErrorContainer key="error-container">
						<ContentContainer>{errorMessage()}</ContentContainer>
					</ErrorContainer>
				) : !isLoading ? (
					<List key="list">
						<ContentContainer>
							<TitleContainer>
								<Title
									key="search-title"
									initial={{ opacity: 0, y: 4 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 4 }}
									transition={animationProps.transition}
								>
									Personagens Marvel:
								</Title>
							</TitleContainer>

							<ListContainer>
								{charactersArray.map((char, index) => {
									return (
										<CharRow
											index={index}
											key={char.id}
											id={char.id}
											name={char.name}
											description={char.description}
											thumbnail={char.thumbnail}
										/>
									);
								})}
							</ListContainer>
							{hasPagination ? (
								<PaginationContainer>
									<Pagination
										page={pageParam}
										charCountTotal={charCountTotal}
										limitPerPage={charLimitPerPage}
									/>
								</PaginationContainer>
							) : null}
						</ContentContainer>
					</List>
				) : null}
			</AnimatePresence>
		</CharactersListContainer>
	);
};
