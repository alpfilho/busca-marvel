import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import {
	PaginationContainer,
	PageNumbersContainer,
	PageLink,
	PageNumber
} from './pagination.style';
import { routes } from 'config';
import { AnimatePresence } from 'framer-motion';

export const Pagination = ({
	page: currentPage = 1,
	charCountTotal,
	limitPerPage
}) => {
	const location = useLocation();
	const totalPageNumber = Math.ceil(charCountTotal / limitPerPage);
	const maxButtons = 6;
	const buttonsNumberDelta =
		totalPageNumber < maxButtons ? totalPageNumber : maxButtons;

	const makePageLinks = () => {
		const range = [];
		const query = queryString.parse(location.search);

		for (let index = 1; index <= buttonsNumberDelta; index++) {
			if (totalPageNumber < maxButtons) {
				const active = index === parseInt(currentPage);
				range.push(
					<PageNumber key={index} active={active}>
						<PageLink
							to={{
								pathname: routes.charList.path,
								search: queryString.stringify(
									Object.assign({}, query, {
										page: index
									})
								)
							}}
						>
							{index}
						</PageLink>
					</PageNumber>
				);
			} else {
				const pagenum = parseInt(currentPage) + index - 1;
				const active = pagenum === parseInt(currentPage);

				if (pagenum < totalPageNumber) {
					range.push(
						<PageNumber key={index} active={active}>
							<PageLink
								to={{
									pathname: routes.charList.path,
									search: queryString.stringify(
										Object.assign({}, query, {
											page: pagenum
										})
									)
								}}
							>
								{pagenum}
							</PageLink>
						</PageNumber>
					);
				}
			}
		}

		return range;
	};

	return (
		<PaginationContainer>
			<PageNumbersContainer>
				<AnimatePresence>{makePageLinks()}</AnimatePresence>
			</PageNumbersContainer>
		</PaginationContainer>
	);
};
