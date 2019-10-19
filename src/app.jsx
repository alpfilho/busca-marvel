import React, { useState, useRef } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Scrollbars } from 'react-custom-scrollbars';

import 'normalize.css';
import './app.style.css';
import { LineFooter, Line } from './app.style';

import { routes } from 'config';

import { Header } from './components/header';
import { Search } from 'components/search';

import { Character } from 'pages/character';
import { CharactersList } from 'pages/charactersList';
import { SplashScreen } from 'components/splashScreen';
import { NotFound } from 'pages/notFound';
import { ScrollRestoration } from 'components/scrollRestoration/scrollRestoration';

function App() {
	/* Duração da Splash Screen em MS */
	const splashDuration = 3000;
	const scrollBars = useRef(null);

	/* Estado responsável por trocar o app e a splash */
	const [showApp, setShowApp] = useState(false);

	if (showApp) {
		return (
			<BrowserRouter>
				<Scrollbars ref={scrollBars} style={{ width: '100%', height: '100vh' }}>
					<ScrollRestoration scrollBars={scrollBars} />
					<Header />
					<AnimatePresence>
						<Route path="/" exact>
							<Search />
						</Route>
					</AnimatePresence>
					<AnimatePresence>
						<Switch>
							{/* Página de personagem */}
							<Route path={`/${routes.char.path}/:id`}>
								<Character />
							</Route>
							{/* Roteamento e Exibição de Personagens */}
							<Route path="/" exact>
								<CharactersList />
							</Route>
							{/* Erro 404 */}
							<Route path="*">
								<NotFound />
							</Route>
						</Switch>
					</AnimatePresence>
					<LineFooter>
						<Line
							initial={{ y: 12 }}
							animate={{ y: 0 }}
							transition={{ duration: 1, delay: 0.2 }}
						/>
					</LineFooter>
				</Scrollbars>
			</BrowserRouter>
		);
	}

	return (
		<SplashScreen
			duration={splashDuration}
			onAnimationEnd={() => {
				/*  Ao finalizar a animação, mostra o app */
				setShowApp(true);
			}}
		/>
	);
}

export default App;
