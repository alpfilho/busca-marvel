import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import {
	CharPage,
	Description,
	ErrorContainer,
	Image,
	ImageContainer,
	MediaImg,
	MediasContainer,
	Name,
	Title
} from './character.style';
import { ContentContainer } from 'components/contentContainer';
import {
	fetchChar as fetchCharApi,
	fetchCharComics
} from 'services/charactersService';
import { animationProps } from 'pages/charactersList/charactersList';
import {
	Spinner,
	SpinnerContainer,
	Text
} from 'pages/charactersList/components/loading/loading.style';

const makeAvatarThumbUrl = ({ path, extension }) => {
	return `${path}.${extension}`;
};

const makeComicThumbUrl = ({ path, extension }) => {
	return `${path}/detail.${extension}`;
};

export const Character = () => {
	const { id } = useParams();
	const cancelTokenRef = useRef({
		executor: () => {}
	});
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const [char, setChar] = useState(null);
	const [medias, setMedias] = useState([]);

	useEffect(() => {
		const fetchChar = async () => {
			setError(null);
			setMedias([]);
			setIsLoading(true);

			try {
				const response = await fetchCharApi(id, cancelTokenRef);

				if (response.data && response.data.code === 200) {
					if (response.data.data.results.length > 0) {
						const character = response.data.data.results[0];
						/* Atualiza a array de personagens */
						setChar(character);

						/* Faz a chamada pelas comics */
						const responseComics = await fetchCharComics(id, cancelTokenRef);

						if (responseComics.data && responseComics.data.code === 200) {
							if (responseComics.data.data.results.length > 0) {
								const comics = responseComics.data.data.results;
								setMedias(comics);

								setIsLoading(false);
							}
						} else {
							setChar(null);
							setError('request');
						}
					} else {
						setChar(null);
						setError('search');
					}
				} else {
					setChar(null);
					setError('request');
				}
			} catch (error) {
				console.log(error);
				setChar(null);
				setError('request');
			}
		};

		const cancel = cancelTokenRef.current;

		fetchChar();
		return () => {
			cancel.executor();
		};
	}, [id]);

	if (isLoading) {
		return (
			<CharPage>
				<ContentContainer>
					<SpinnerContainer
						key="loading-spinner"
						initial={{ opacity: 0, y: -16 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 16 }}
						transition={animationProps.transition}
					>
						<Spinner />
					</SpinnerContainer>
					<Text
						key="loading-text"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 16 }}
						transition={animationProps.transition}
					>
						Carregando
					</Text>
				</ContentContainer>
			</CharPage>
		);
	}

	if (char) {
		return (
			<CharPage>
				<ContentContainer>
					<ImageContainer
						initial={{ y: 32, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -32, opacity: 0 }}
						transition={animationProps.transition}
					>
						<Image src={makeAvatarThumbUrl(char.thumbnail)} alt={char.name} />
					</ImageContainer>
					<Name
						initial={{ y: 16, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -16, opacity: 0 }}
						transition={{ ...animationProps.transition, delay: 0.15 }}
					>
						{char.name}
					</Name>
					<Description
						initial={{ y: 16, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -16, opacity: 0 }}
						transition={{ ...animationProps.transition, delay: 0.25 }}
					>
						{char.description || 'Sem Descrição'}
					</Description>
					<Title
						initial={{ y: 16, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -16, opacity: 0 }}
						transition={{ ...animationProps.transition, delay: 0.25 }}
					>
						3 quadrinhos que participou:
					</Title>
					<MediasContainer
						initial={{ y: 16, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -16, opacity: 0 }}
						transition={{ ...animationProps.transition, delay: 0.25 }}
					>
						{medias.map((comic, index) => {
							return (
								<a key={index} href={comic.urls[0].url}>
									<MediaImg src={makeComicThumbUrl(comic.thumbnail)} />
								</a>
							);
						})}
					</MediasContainer>
				</ContentContainer>
			</CharPage>
		);
	}

	if (error) {
		const errorAnimation = {
			initial: { y: -10, opacity: 0 },
			animate: { y: 0, opacity: 1 },
			exit: { y: 10, opacity: 0 },
			transition: animationProps.transition
		};

		/* Caso exista algum erro */
		if (error === 'request') {
			return (
				<ErrorContainer>
					<ContentContainer>
						<Title key="request-error" {...errorAnimation}>
							Erro ao comunicar com a Marvel <span aria-hidden>😩</span>
						</Title>
					</ContentContainer>
				</ErrorContainer>
			);
		}
		if (error === 'search') {
			return (
				<ErrorContainer>
					<Title key="search-error" {...errorAnimation}>
						Nenhum personagem com este nome <span aria-hidden>😩</span>
					</Title>
				</ErrorContainer>
			);
		}
	}

	return null;
};
