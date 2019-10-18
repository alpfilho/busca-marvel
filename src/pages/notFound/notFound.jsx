import React from 'react';

import { ContentContainer } from 'components/contentContainer';
import { Button } from 'components/button';
import { NotFoundContainer } from './notFound.style';
import { routes } from 'config';

export const NotFound = () => {
	return (
		<NotFoundContainer>
			<ContentContainer>
				<h1>
					Página não encontrada <span aria-hidden>😩</span>
				</h1>
				<Button to={routes.charList.path} type="link">
					Voltar para o início
				</Button>
			</ContentContainer>
		</NotFoundContainer>
	);
};
