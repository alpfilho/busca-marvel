import styled from 'styled-components';
import { Link as RcdLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container, Content } from 'components/contentContainer';
import { colors } from 'config/colors';

export const CharacterRow = styled(motion.div)`
	width: 100%;
	height: auto;
	max-width: 772px;
	margin-bottom: 16px;
	border-radius: 16px;
	position: relative;

	background-color: #fff;
	box-shadow: 0 4px 35px rgba(0, 0, 0, 0.1);

	will-change: background-color;
	text-decoration: none;
	transition: background-color 250ms ease;
	cursor: pointer;

	${Container} {
		width: 100%;
		height: 100%;
		${Content} {
			display: flex;
			flex-direction: row;
			@media screen and (max-width: 768px) {
				flex-direction: column;
				align-items: center;
			}
			justify-content: flex-start;
			align-items: center;
			padding: 32px 42px;
		}
	}
`;

export const Link = styled(RcdLink)`
	width: 100%;
	height: 100%;
	text-decoration: none;
`;

export const ThumbContainer = styled('div')`
	padding-right: 8px;
	height: 112px;
	width: 112px;
	flex-shrink: 0;
`;

export const Thumbnail = styled(motion.div)`
  height: 100%;
  width: 100%;
  border-radius: 16%;
  margin-right: 25px;
  background-color: #ccc;
  background-image: url("${(props) => props.backgroundImage}");
  box-shadow: 0 2px 15px rgba(0,0,0,0.2);
  background-size: cover;
  background-position: center center;
`;

export const TextContainer = styled('div')`
	padding-left: 8px;
	padding-right: 8px;
	@media screen and (max-width: 768px) {
		text-align: center;
	}
`;

export const Name = styled(motion.h2)`
	color: ${colors.primary};
	font-size: 21px;
`;

export const Description = styled(motion.p)`
	font-size: 16px;
	color: ${colors.text};
	hyphens: auto;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
