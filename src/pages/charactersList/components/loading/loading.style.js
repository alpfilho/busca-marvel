import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from 'config';
import { Container, Content } from 'components/contentContainer';

export const LoadingContainer = styled('main')`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 332px;
	width: 100%;
	z-index: 20;

	${Container} {
		height: 100%;

		${Content} {
			height: 100%;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
`;

export const Background = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	width: 100%;
	//background-color: #fff;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

export const SpinnerContainer = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 8px;
`;

export const Spinner = styled('div')`
	border-bottom: 6px solid transparent;
	border-left: 6px solid transparent;
	border-right: 6px solid ${colors.primary};
	border-top: 6px solid ${colors.primary};
	border-radius: 100%;
	height: 72px;
	width: 72px;
	animation: ${spin} 1.2s infinite linear;
`;

export const Text = styled(motion.span)`
	margin: 16px 0;
	font-weight: 400;
	color: ${colors.primary};
`;
