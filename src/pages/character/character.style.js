import styled from 'styled-components';
import { Container, Content } from 'components/contentContainer';
import { colors } from 'config';
import { motion } from 'framer-motion';

export const CharPage = styled('main')`
	flex-grow: 1;
	position: relative;

	${Container} {
		${Content} {
			padding-top: 32px;
			padding-bottom: 92px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
`;

export const ImageContainer = styled(motion.div)`
	width: auto;
	max-width: 442px;
	background-color: #ddd;
	box-shadow: 0 2px 35px rgba(0, 0, 0, 0.2);
	min-height: 192px;
	height: auto;
	border-radius: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

export const Image = styled('img')`
	width: 100%;
	height: auto;
`;

export const Name = styled(motion.h1)`
	color: ${colors.primary};
	margin-top: 32px;
	margin-bottom: 16px;
	font-size: 32px;
	font-weight: 900;
`;

export const Description = styled(motion.div)`
	font-size: 16px;
	font-weight: 400;
	color: ${colors.text};
	max-width: 552px;
	text-align: justify;
	line-height: 1.3;
`;

export const Title = styled(motion.div)`
	padding-top: 32px;
	color: ${colors.text};
	font-size: 14px;
	font-weight: 900;
`;

export const ErrorContainer = styled('main')`
	flex-grow: 1;
	position: relative;

	${Container} {
		${Content} {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding-top: 32px;

			${Title} {
				text-align: center;
				margin: 0;
				font-size: 22px;
				color: ${colors.primary};
			}
		}
	}
`;

export const MediasContainer = styled(motion.div)`
	margin-top: 32px;
	width: 100%;
	background-color: #eee;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding-top: 32px;
	padding-bottom: 32px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const MediaImg = styled('img')`
	width: 22vw;
	max-width: 332px;
	height: auto;
	margin-left: 32px;
	margin-right: 32px;

	@media screen and (max-width: 768px) {
		width: 52vw;
		margin: 12px;
	}
	border-radius: 12px;
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
`;
