import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LineFooter = styled('footer')`
	position: fixed;
	bottom: 0;
	width: 100%;
	min-height: 12px;
	height: auto;
`;

export const Line = styled(motion.div)`
	background-color: #d42026;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 12px;
	width: 100%;
`;
