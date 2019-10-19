import styled from 'styled-components';

import { colors } from 'config';
import { Container, Content } from 'components/contentContainer';
import { motion } from 'framer-motion';

export const SearchContainer = styled(motion.div)`
	${Container} {
		${Content} {
			padding-top: 32px;
			padding-bottom: 16px;
		}
	}
`;

export const SearchForm = styled(motion.form)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Label = styled('label')`
	color: ${colors.primary};
	font-size: 22px;
	font-weight: 900;
`;

export const Input = styled('input')`
	margin-top: 4px;
	border-radius: 5px;
	border: none;
	color: ${colors.text};
	width: 100%;
	min-width: 400px;
	@media screen and (max-width: 768px) {
		min-width: 72vw;
	}
	font-size: 16px;
	padding: 4px;

	&:focus,
	:active {
		outline: none;
	}
`;

export const InputContainer = styled('div')`
	margin: 16px 0;
	display: flex;
	flex-direction: row;
	border-radius: 12px;
	padding: 12px 16px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	border: 2px solid ${colors.primaryLight};
	transition: box-shadow 500ms ease;

	&:hover {
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}
`;

export const SearchButton = styled('button')`
	background: none;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	cursor: pointer;
`;

export const SearchIcon = styled('svg')`
	height: 18px;
	width: auto;
`;
