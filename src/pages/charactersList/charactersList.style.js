import styled from 'styled-components';

import { colors } from 'config';
import { SitePage } from 'components/page/page.style';

export const CharactersListContainer = styled(SitePage)`
	height: auto;
	//transition: height 250ms ease;
`;

export const List = styled('div')`
	position: relative;
`;

export const TitleContainer = styled('div')`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Title = styled('h1')`
	text-align: center;
	margin: 0;
	font-size: 22px;
	color: ${colors.primary};
`;

export const SubTitle = styled('h4')`
	font-size: 14px;
	margin: 0 0 4px 0;
	font-weight: 400;
	color: ${colors.text};
`;

export const Header = styled('div')`
	//background-color: blue;
	width: 100%;
	padding-top: 32px;
	display: flex;
`;

export const HeaderTitle = styled('div')`
	background-color: #d42026;
	color: #fff;
	font-size: 16px;
	font-weight: 400;
	height: 37px;
	line-height: 37px;
	padding-left: 16px;
	width: 75%;

	margin-right: 5px;
	margin-left: 5px;

	&:first-child {
		margin-left: 0px;
		width: 25%;
	}

	&:last-child {
		margin-right: 0px;
	}
`;

export const Body = styled('div')`
	position: relative;
`;
