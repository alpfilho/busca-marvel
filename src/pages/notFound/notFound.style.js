import styled from 'styled-components';
import { SitePage } from 'components/page/page.style';
import { Container, Content } from 'components/contentContainer';
import { colors } from 'config';

export const NotFoundContainer = styled(SitePage)`
	height: ;
	${Container} {
		height: 100%;
		${Content} {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			height: 100%;

			h1 {
				font-weight: 900;
				color: ${colors.primary};
			}
		}
	}
`;
