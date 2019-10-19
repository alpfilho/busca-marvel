import React from 'react';
import {
	LoadingContainer,
	Background,
	SpinnerContainer,
	Spinner,
	Text
} from './loading.style';
import { ContentContainer } from 'components/contentContainer';
import { animationProps } from 'pages/charactersList/charactersList';

export const Loading = () => {
	return (
		<LoadingContainer>
			<Background
				key="loading-spinner"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={animationProps.transition}
			/>
			<ContentContainer>
				<SpinnerContainer
					key="loading-spinner"
					initial={{ opacity: 0, y: -16 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 16 }}
					transition={animationProps.transition}
				>
					<Spinner />
				</SpinnerContainer>
				<Text
					key="loading-text"
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 16 }}
					transition={animationProps.transition}
				>
					Carregando
				</Text>
			</ContentContainer>
		</LoadingContainer>
	);
};
