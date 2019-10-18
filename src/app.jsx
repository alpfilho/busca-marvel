import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'normalize.css';
import './app.style.css';

import { routes } from 'config';

import { Header } from './components/header';
import { Footer } from 'components/footer';
import { Search } from 'components/search';

import { Character } from 'pages/character';
import { CharactersList } from 'pages/charactersList';
import { SplashScreen } from 'components/splashScreen';
import { NotFound } from 'pages/notFound';

function App() {
	/* Duração da Splash Screen em MS */
	const splashDuration = 250;

	/* Estado responsável por trocar o app e a splash */
	const [showApp, setShowApp] = useState(false);

	if (showApp) {
		return (
			<BrowserRouter>
				<Header />
				<Search />

				<Switch>
					{/* Página de personagem */}
					<Route path={`${routes.char.path}/:id`}>
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

				<Footer />
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
