import React from 'react';
import { motion } from 'framer-motion';
import { ContentContainer } from 'components/contentContainer';
import { Button } from 'components/button';
import { NotFoundContainer } from './notFound.style';
import { routes } from 'config';
import { animationProps } from 'pages/charactersList/charactersList';

export const NotFound = () => {
	return (
		<NotFoundContainer>
			<ContentContainer>
				<motion.h1
					initial={{ y: 16, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -16, opacity: 0 }}
					transition={animationProps.transition}
				>
					Página não encontrada <span aria-hidden>😩</span>
				</motion.h1>
				<motion.div
					initial={{ y: 16, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -16, opacity: 0 }}
					transition={animationProps.transition}
				>
					<Button to={routes.charList.path} type="link">
						Voltar para o início
					</Button>
				</motion.div>
			</ContentContainer>
		</NotFoundContainer>
	);
};
