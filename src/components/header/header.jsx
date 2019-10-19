import React from 'react';
import { motion } from 'framer-motion';
import { ContentContainer } from 'components/contentContainer';
import {
	ApplicantNameContainer,
	HeaderContainer,
	Line,
	LogoMarvel,
	SubTitle,
	Title,
	TitleContainer
} from './header.style';

import logoMarvel from 'img/marvel-logo.svg';
import { routes } from 'config';

export function Header() {
	return (
		<HeaderContainer>
			<ContentContainer>
				<motion.div
					key="logo"
					initial={{ opacity: 0, y: -33 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						type: 'spring',
						damping: 100,
						mass: 2
					}}
				>
					<TitleContainer to={routes.charList.path}>
						<Title>Busca</Title>
						<LogoMarvel src={logoMarvel} />
						<SubTitle>
							Teste <br /> Front-End
						</SubTitle>
						<Line />
					</TitleContainer>
				</motion.div>
				<motion.div
					key="author"
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						type: 'tween',
						damping: 50,
						mass: 1,
						delay: 0.2
					}}
				>
					<ApplicantNameContainer>
						<SubTitle>Desenvolvidor Por:</SubTitle>
						<Title>Alfredo Peres</Title>
					</ApplicantNameContainer>
				</motion.div>
			</ContentContainer>
		</HeaderContainer>
	);
}
