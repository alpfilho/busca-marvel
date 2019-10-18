import React, { useEffect, useState } from 'react';

/* Logos */
import logoObjective from 'img/logo-objective.svg';
import logoMarvel from 'img/marvel-logo.svg';

/* Styles  */
import {
	Anchor,
	Background,
	CreditsContainer,
	Logo,
	LogoContainer,
	SplashScreenContainer,
	Title
} from './splashScreen.style';

/* Componentes */
import { ContentContainer } from 'components/contentContainer';

export const SplashScreen = ({ duration: durationProp, onAnimationEnd }) => {
	const durations = {
		/* A transição de entrada e saída durarão 25% do tempo cada */
		transition: durationProp * 0.25,
		/* A logo ficará visível por 50% do tempo */
		visible: durationProp * 0.5
	};

	/* Estado responsável por fazer as trocas de variants */
	const [state, setState] = useState('hidden');

	/* State Ao carregar a logo da Marvel */
	const [isMLogoLoaded, setIsMLogoLoaded] = useState(false);

	/* State Ao carregar a logo da Marvel */
	const [isObjLogoLoaded, setIsObjLogoLoaded] = useState(false);

	const onMarvelLogoLoaded = () => {
		setIsMLogoLoaded(true);
	};
	const onObjectiveLogoLoaded = () => {
		setIsObjLogoLoaded(true);
	};

	useEffect(() => {
		if (isMLogoLoaded && isObjLogoLoaded && state === 'hidden') {
			/*
       Aguardo 500 ms para dar tempo de carregar a fonte, mas o certo é
      usar um listener de fontes
      */
			setTimeout(() => {
				setState('visible');

				/* Aguardo o tempo da transição de entrada e o tempo que as logos ficarão visíveis */
				setTimeout(() => {
					setState('exit');

					/* Aguardo o tempo de transição */
					setTimeout(() => {
						onAnimationEnd();
					}, durations.transition);
				}, durations.transition + durations.visible);
			}, 500);
		}
	});

	return (
		<SplashScreenContainer>
			<Anchor>
				<ContentContainer>
					<LogoContainer>
						{/*
              Título
            */}
						<Title
							initial={false}
							animate={state}
							transition={{
								type: 'tween',
								duration: durations.transition / 1000
							}}
							variants={{
								hidden: {
									opacity: 0,
									y: '-33%',
									scale: 1.1
								},
								visible: {
									opacity: 1,
									y: '0%',
									scale: 1
								},
								exit: {
									opacity: 0,
									y: '-33%'
								}
							}}
						>
							Busca de Personagens
						</Title>

						{/*
              Logo Marvel
            */}
						<Logo
							initial={false}
							animate={state}
							transition={{
								type: 'tween',
								duration: durations.transition / 1000
							}}
							variants={{
								hidden: {
									opacity: 0,
									y: '16%',
									scale: 1.1
								},
								visible: {
									opacity: 1,
									y: '0%',
									scale: 1
								},
								exit: {
									opacity: 0,
									y: '-16%',
									scale: 1
								}
							}}
							src={logoMarvel}
							alt="Marvel"
							onLoad={() => {
								onMarvelLogoLoaded();
							}}
						/>
					</LogoContainer>
					<CreditsContainer>
						<Title
							initial={false}
							animate={state}
							transition={{
								type: 'tween',
								duration: durations.transition / 1000
							}}
							variants={{
								hidden: {
									opacity: 0,
									y: '20%'
								},
								visible: {
									opacity: 1,
									y: '0%'
								},
								exit: {
									opacity: 0,
									y: '-20%'
								}
							}}
						>
							Powered By
						</Title>
						<Logo
							initial={false}
							animate={state}
							transition={{
								type: 'tween',
								duration: durations.transition / 1000
							}}
							variants={{
								hidden: {
									opacity: 0,
									y: '20%'
								},
								visible: {
									opacity: 1,
									y: '0%'
								},
								exit: {
									opacity: 0,
									y: '-20%'
								}
							}}
							src={logoObjective}
							onLoad={() => {
								onObjectiveLogoLoaded();
							}}
						/>
					</CreditsContainer>
				</ContentContainer>
				<Background />
			</Anchor>
		</SplashScreenContainer>
	);
};
