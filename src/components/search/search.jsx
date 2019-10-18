import React, { useRef, useState, useEffect } from 'react';
import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';

import {
	SearchContainer,
	SearchForm,
	Label,
	InputContainer,
	Input,
	SearchButton,
	SearchIcon
} from './search.style';

import { colors } from 'config';
import { ContentContainer } from 'components/contentContainer';

export const Search = () => {
	const [inputValue, setInputValue] = useState('');
	const input = useRef(null);
	const history = useHistory();
	const location = useLocation();

	const handleSubmit = (event) => {
		event.preventDefault();

		if (inputValue && inputValue.length > 0) {
			/* Ao enviar o form, altera a url, processando a url de pesquisa */
			history.push({
				pathname: '/',
				search: queryString.stringify({
					name: inputValue
				})
			});
		} else {
			history.push({
				pathname: '/'
			});
		}
	};

	/**
	 * Sempre que o location search mudar (query string), muda o input, para manter coerência
	 */
	useEffect(() => {
		if (location.search) {
			const query = queryString.parse(location.search);

			if (query.name) {
				setInputValue(query.name);
			}
		} else {
			setInputValue('');
		}
	}, [location.search]);
	return (
		<SearchContainer>
			<ContentContainer>
				<SearchForm onSubmit={handleSubmit}>
					<Label>Descubra um Personagem:</Label>
					<InputContainer>
						<Input
							ref={input}
							name="charname"
							type="text"
							autoComplete="off"
							value={inputValue}
							onChange={(evt) => {
								setInputValue(evt.target.value);
							}}
							placeholder="Digite o nome do personagem e tecle enter"
						/>
						<SearchButton type="submit">
							<SearchIcon
								ariaHidden="true"
								focusable="false"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<path
									fill={colors.primary}
									d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
								/>
							</SearchIcon>
						</SearchButton>
					</InputContainer>
				</SearchForm>
			</ContentContainer>
		</SearchContainer>
	);
};
