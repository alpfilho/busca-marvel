import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Content } from 'components/contentContainer';
import { colors } from 'config';

export const CharactersListContainer = styled('main')`
	flex-grow: 1;
	position: relative;
	${Container} {
		${Content} {
			padding-bottom: 92px;
		}
	}
`;

export const List = styled('div')`
	position: absolute;
	left: 50%;
	width: 100%;
	height: 100%;
	z-index: 10;
	transform: translateX(-50%);
	padding-bottom: 32px;
`;

export const TitleContainer = styled('div')`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 0 32px;
`;

export const Title = styled(motion.h1)`
	text-align: center;
	margin: 0;
	font-size: 22px;
	color: ${colors.primary};
`;

export const SubTitle = styled(motion.h4)`
	font-size: 14px;
	margin: 0 0 4px 0;
	font-weight: 400;
	color: ${colors.text};
`;

export const ListContainer = styled('div')`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding-bottom: 32px;
	position: relative;
`;

export const ErrorContainer = styled('main')`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 100%;
	width: 100%;
	z-index: 10;

	${Container} {
		${Content} {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding-top: 32px;
		}
	}
`;

export const PaginationContainer = styled('div')`
	padding-bottom: 52px;
`;
