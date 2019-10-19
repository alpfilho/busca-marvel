import styled from 'styled-components';

import { Container, Content } from 'components/contentContainer';
import { colors } from 'config';

export const NotFoundContainer = styled('div')`
	flex-grow: 1;
	min-height: calc(100vh - 72px);
	position: relative;
	display: flex;

	${Container} {
		flex-grow: 1;

		${Content} {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			h1 {
				font-weight: 900;
				color: ${colors.primary};
			}
		}
	}
`;
