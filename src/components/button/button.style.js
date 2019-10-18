import styled from 'styled-components';
import { colors } from 'config';

export const ButtonContainer = styled('button')`
	border: none;
	background-color: ${colors.primary};
	font-weight: 900;
	color: #fff;
	padding: 16px 32px;
	text-decoration: none;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
