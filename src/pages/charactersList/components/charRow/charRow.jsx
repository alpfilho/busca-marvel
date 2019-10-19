import React from 'react';

import { routes } from 'config';
import { ContentContainer } from 'components/contentContainer';
import {
	CharacterRow,
	TextContainer,
	ThumbContainer,
	Thumbnail,
	Link,
	Name,
	Description
} from './charRow.style';
import { animationProps } from 'pages/charactersList/charactersList';

export const CharRow = ({ id, name, description, thumbnail, index }) => {
	const makeThumbUrl = ({ path, extension }) => {
		return `${path}/portrait_fantastic.${extension}`;
	};

	const delay = 0.1 * index;
	const duration = 0.5;

	return (
		/* O container também é o Link */
		<CharacterRow
			initial={{ y: 33, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: 10, opacity: 0 }}
			transition={{
				when: 'beforeChildren',
				type: 'tween',
				duration,
				delay,
				ease: animationProps.transition.ease
			}}
		>
			<Link to={`${routes.char.path}/${id}`}>
				<ContentContainer>
					<ThumbContainer>
						<Thumbnail
							initial={{
								y: 33,
								opacity: 0
							}}
							animate={{
								y: 0,
								opacity: 1
							}}
							transition={{
								type: 'tween',
								duration,
								delay: delay + 0.2,
								ease: animationProps.transition.ease
							}}
							backgroundImage={makeThumbUrl(thumbnail)}
						/>
					</ThumbContainer>

					<TextContainer>
						<Name
							initial={{
								y: '33%',
								opacity: 0
							}}
							animate={{
								y: '0%',
								opacity: 1
							}}
							exit={{ y: '33%', opacity: 0 }}
							transition={{
								type: 'tween',
								duration,
								delay: delay + 0.4,
								ease: animationProps.transition.ease
							}}
						>
							{name}
						</Name>
						<Description
							initial={{
								y: '33%',
								opacity: 0
							}}
							animate={{
								y: '0%',
								opacity: 1
							}}
							exit={{ y: '33%', opacity: 0 }}
							transition={{
								type: 'tween',
								duration,
								delay: delay + 0.5,
								ease: animationProps.transition.ease
							}}
						>
							{description}
						</Description>
					</TextContainer>
				</ContentContainer>
			</Link>
		</CharacterRow>
	);
};
