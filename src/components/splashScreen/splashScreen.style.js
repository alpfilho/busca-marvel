import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Container, Content } from 'components/contentContainer';
import { colors } from 'config';

export const SplashScreenContainer = styled('div')`
	position: fixed;
	height: 100vh;
	width: 100vw;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	${Container} {
		position: relative;
		height: 100%;
		z-index: 110;
		${Content} {
			display: flex;
			height: 100%;
			flex-direction: column;
			user-select: none;
		}
	}
`;

export const Anchor = styled('div')`
	position: relative;
	height: 100%;
	width: 100%;
`;

export const Background = styled('div')`
	position: absolute;
	z-index: 100;
	top: 0px;
	right: 0px;
	left: 0px;
	bottom: 0px;
	background-color: #fff;
	background-image: radial-gradient(#fff, #eee);
`;

export const Title = styled(motion.span)`
	color: #d42026;
	font-size: 27px;
	font-weight: 900;
`;

export const Logo = styled(motion.img)`
	color: #fff;
`;

export const LogoContainer = styled('div')`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1;

	${Title} {
		margin-bottom: 16px;
	}

	${Logo} {
		width: 100%;
		max-width: 308px;
	}
`;

export const CreditsContainer = styled('div')`
	width: 100%;
	height: auto;
	padding-bottom: 32px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;

	${Title} {
		color: ${colors.text};
		font-size: 12px;
		font-weight: 400;
		margin-bottom: 12px;
	}

	${Logo} {
		width: 172px;
	}
`;
