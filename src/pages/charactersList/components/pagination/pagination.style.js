import styled from 'styled-components';
import { colors } from 'config';
import { Link } from 'react-router-dom';

export const PaginationContainer = styled('div')`
	width: 100%;
	height: 52px;
	padding-bottom: 32px;
`;

export const PageNumbersContainer = styled('div')`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const PageLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`;

export const PageNumber = styled('div')`
	font-size: 18px;
	margin-left: 8px;
	margin-right: 8px;
	padding: 4px;
	font-weight: 900;

	${PageLink} {
		color: ${({ active }) => {
			if (active) {
				return colors.primary;
			}
			return colors.text;
		}};
	}
`;
